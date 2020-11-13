import React, { useRef, useCallback } from 'react';
import {
  FiBookOpen,
  FiFileText,
  FiCalendar,
  FiMapPin,
  FiLink,
} from 'react-icons/fi';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import { Container, StyledForm } from './styles';
import Input from '../../Input';
import TextArea from '../../TextArea';

import getValidationErrors from '../../../utils/getValidationErrors';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/auth';
import { useToast } from '../../../hooks/toast';

const NewEventModal: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { token } = useAuth();
  const { addToast } = useToast();

  Yup.setLocale({
    mixed: {
      notType: 'Informe um valor válido',
    },
  });

  const handleSubmit = useCallback(async data => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome do evento obrigatório'),
        description: Yup.string().required('Descrição obrigatória'),
        year: Yup.number()
          .required('Ano obrigatório')
          .integer('Informe um ano válido'),
        latitude: Yup.number().required('Latitude obrigatória'),
        longitude: Yup.number().required('Latitude obrigatória'),
        link: Yup.string()
          .required('Link obrigatório')
          .url('Informe um link válido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('events', data, {
        headers: {
          authorization: token,
        },
      });

      addToast({
        title: 'Evento cadastrado com sucesso',
        type: 'success',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        title: 'Erro ao cadastrar, cheque as informações',
        type: 'error',
      });
    }
  }, []);

  return (
    <Container>
      <h2>Cadastro de eventos</h2>
      <StyledForm
        onSubmit={handleSubmit}
        ref={formRef}
        initialData={{ link: 'https://pt.wikipedia.org/wiki/' }}
      >
        <Input name="name" placeholder="Nome do evento" icon={FiBookOpen} />
        <TextArea
          name="description"
          placeholder="Descrição"
          icon={FiFileText}
        />
        <Input name="year" placeholder="Ano" icon={FiCalendar} />
        <div className="position">
          <Input name="latitude" placeholder="Latitude" icon={FiMapPin} />
          <Input name="longitude" placeholder="Longitude" icon={FiMapPin} />
        </div>
        <Input name="link" placeholder="Link" icon={FiLink} />
        <button type="submit">Cadastrar</button>
      </StyledForm>
    </Container>
  );
};

export default NewEventModal;
