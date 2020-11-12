import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import Input from '../../Input';

import { Container, StyledForm } from './styles';

const NewEventModal: React.FC = () => {
  return (
    <Container>
      <h2>Faça login para cadastrar novos eventos</h2>
      <StyledForm>
        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="Senha" icon={FiLock} />
        <button type="submit">Logar como administrador</button>
      </StyledForm>
    </Container>
  );
};

export default NewEventModal;
