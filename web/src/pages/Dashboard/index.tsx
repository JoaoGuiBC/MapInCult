import React, { useCallback, useEffect, useState } from 'react';
import {
  FiPlus,
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronsRight,
  FiMinus,
  FiTrash,
} from 'react-icons/fi';
import { TileLayer, Marker } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import { useAuth } from '../../hooks/auth';

import {
  Header,
  Sidebar,
  Container,
  StyledPopup,
  StyledButton,
  ExcludeButton,
  TimelineContainer,
  StyledMapContainer,
} from './styles';

import Modals from '../../components/Modals';

import mapMarkerImg from '../../images/map-marker.svg';
import logoImg from '../../images/logo_transparent.svg';
import api from '../../services/api';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [38, 38],
  iconAnchor: [19, 38],

  popupAnchor: [0, -35],
});

const bounds = Leaflet.latLngBounds([
  [84.984656, 200.126969],
  [-84.969265, -200.424584],
]);

interface eventsData {
  id: string;
  name: string;
  description: string;
  year: number;
  latitude: number;
  longitude: number;
  link: string;
}

const EventsMap: React.FC = () => {
  const [events, setEvents] = useState<eventsData[]>([]);
  const [initialDate, setInitialDate] = useState<number>(2001);
  const [finalDate, setFinalDate] = useState<number>(2100);
  const [modalOpen, setModalOpen] = useState(false);
  const [admin, setAdmin] = useState('');
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  const { token } = useAuth();

  const getEvents = useCallback(() => {
    api.get('events').then(response => {
      setEvents(response.data);
    });
  }, []);

  useEffect(getEvents, [getEvents]);

  useEffect(() => setAdmin(token), [token]);

  const toggleModal = useCallback(() => setModalOpen(opened => !opened), []);

  const decreaseDate = useCallback(() => {
    setInitialDate(Date => Date - 100);
    setFinalDate(Date => Date - 100);
  }, []);

  const increaseDate = useCallback(() => {
    setInitialDate(Date => Date + 100);
    setFinalDate(Date => Date + 100);
  }, []);

  const deleteEvent = useCallback(
    async (id: string) => {
      await api.delete('events', {
        data: { id },
        headers: { authorization: admin },
      });

      setEvents(oldEvents => oldEvents.filter(event => event.id !== id));
    },
    [admin],
  );

  return (
    <Container>
      <Sidebar isVisible={menuIsVisible}>
        <button type="button" onClick={() => setMenuIsVisible(!menuIsVisible)}>
          <FiChevronLeft size={30} />
        </button>
        <Header>
          <img src={logoImg} alt="MIC" />

          <h2>Escolha um evento no mapa</h2>
        </Header>
      </Sidebar>

      <StyledMapContainer
        center={[0, 0]}
        zoom={4}
        style={{ width: '100%', height: '100%' }}
        maxBounds={bounds}
        boundsOptions={{ padding: [50, 50] }}
        maxBoundsViscosity={1}
        minZoom={4}
        maxZoom={7}
        zoomControl={false}
        doubleClickZoom={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/joaoguibc/ckh8f39x311nc19qhcqusrknv/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {events.map(event => {
          if (event.year >= initialDate && event.year <= finalDate) {
            return (
              <Marker
                key={event.id}
                icon={mapIcon}
                position={[event.latitude, event.longitude]}
              >
                <StyledPopup closeButton={false} minWidth={240} maxWidth={340}>
                  <h2>{`${event.name} - ${event.year}`}</h2>

                  {admin && (
                    <ExcludeButton onClick={() => deleteEvent(event.id)}>
                      <FiTrash size={18} />
                    </ExcludeButton>
                  )}

                  <p>{event.description}</p>

                  <p>
                    <strong>Leia mais: </strong>
                    <a href={event.link}>Wikipedia</a>
                  </p>
                </StyledPopup>
              </Marker>
            );
          }

          return '';
        })}
      </StyledMapContainer>

      <TimelineContainer>
        <button type="button" onClick={decreaseDate}>
          <FiChevronsLeft size={30} color="#312e38" />
        </button>

        <p>
          {initialDate}
          <FiMinus />
          {finalDate}
        </p>

        <button type="button" onClick={increaseDate}>
          <FiChevronsRight size={30} color="#312e38" />
        </button>
      </TimelineContainer>

      <StyledButton onClick={toggleModal}>
        <FiPlus size={32} color="#312e38" />
      </StyledButton>

      <Modals
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        getEvents={getEvents}
      />
    </Container>
  );
};

export default EventsMap;
