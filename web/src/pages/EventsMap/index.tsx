import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { TileLayer, Marker } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import {
  Container,
  Sidebar,
  Header,
  StyledLink,
  StyledPopup,
  StyledMapContainer,
} from './styles';

import mapMarkerImg from '../../images/map-marker.svg';
import logoImg from '../../images/logo_transparent.svg';
import api from '../../services/api';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [38, 38],
  iconAnchor: [19, 38],

  popupAnchor: [0, -35],
});

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

  useEffect(() => {
    api.get('events').then(response => {
      setEvents(response.data);
    });
  }, []);

  return (
    <Container>
      <Sidebar>
        <Header>
          <img src={logoImg} alt="MIC" />

          <h2>Escolha um evento no mapa</h2>
        </Header>
      </Sidebar>

      <StyledMapContainer
        center={[-12.8410503, -52.7926806]}
        zoom={4}
        style={{ width: '100%', height: '100%' }}
        minZoom={4}
        maxZoom={7}
        zoomControl={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/joaoguibc/ckh8f39x311nc19qhcqusrknv/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {events.map(event => {
          return (
            <Marker
              key={event.id}
              icon={mapIcon}
              position={[event.latitude, event.longitude]}
            >
              <StyledPopup closeButton={false} minWidth={240} maxWidth={340}>
                <h2>{`${event.name} - ${event.year}`}</h2>

                <p>{event.description}</p>

                <p>
                  <strong>Leia mais: </strong>
                  <a href={event.link}>Wikipedia</a>
                </p>
              </StyledPopup>
            </Marker>
          );
        })}
      </StyledMapContainer>

      <StyledLink to="wikipedia.com">
        <FiPlus size={32} color="#312e38" />
      </StyledLink>
    </Container>
  );
};

export default EventsMap;
