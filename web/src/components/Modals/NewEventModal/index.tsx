import React from 'react';
import {
  FiBookOpen,
  FiFileText,
  FiCalendar,
  FiMapPin,
  FiLink,
} from 'react-icons/fi';

import Input from '../../Input';
import TextArea from '../../TextArea';

import { Container, StyledForm } from './styles';

const NewEventModal: React.FC = () => {
  return (
    <Container>
      <h2>Cadastro de eventos</h2>
      <StyledForm>
        <Input placeholder="Nome do evento" icon={FiBookOpen} />
        <TextArea placeholder="Descrição" icon={FiFileText} />
        <Input placeholder="Ano" icon={FiCalendar} />
        <div className="position">
          <Input placeholder="Latitude" icon={FiMapPin} />
          <Input placeholder="Longitude" icon={FiMapPin} />
        </div>
        <Input placeholder="Link" icon={FiLink} />
        <button type="submit">Cadastrar</button>
      </StyledForm>
    </Container>
  );
};

export default NewEventModal;
