import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../Input';
import { Container, StyledForm } from './styles';

import getValidationErrors from '../../../utils/getValidationErrors';
import { useAuth } from '../../../hooks/auth';
import { useToast } from '../../../hooks/toast';

interface SignInFormData {
  email: string;
  password: string;
}

const NewEventModal: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Informe um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação, cheque as credenciais',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <h2>Faça login para cadastrar novos eventos</h2>
      <StyledForm onSubmit={handleSubmit} ref={formRef}>
        <Input name="email" placeholder="E-mail" icon={FiMail} />
        <Input
          name="password"
          placeholder="Senha"
          icon={FiLock}
          type="password"
        />
        <button type="submit">Logar como administrador</button>
      </StyledForm>
    </Container>
  );
};

export default NewEventModal;
