import React, { useState } from 'react';
import {
  LoginBackground,
  LoginForm,
  LoginFormContent,
  LoginImage,
  LoginInfo,
  LoginTitle,
} from './styled';
import loginImage from '../../shared/assets/images/login.svg';
import { Form, Input } from '../../shared/components/Form';
import { useForm } from 'react-hook-form';
import { Button } from '../../shared/components';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <LoginBackground>
      <LoginInfo>
        <LoginImage src={loginImage} alt="Login image" />
      </LoginInfo>
      <Form onSubmit={onSubmit}>
        <LoginForm>
          <LoginTitle>Entre em sua conta</LoginTitle>
          <LoginFormContent>
            <Input
              name="email"
              label="Email"
              placeholder="insira o seu email"
              control={control}
              type="text"
            />
            <Input
              name="password"
              label="Senha"
              placeholder="insira a sua senha"
              control={control}
              type="password"
            />
            <Button type="submit" width="100%" loading={loading}>
              login
            </Button>
          </LoginFormContent>
        </LoginForm>
      </Form>
    </LoginBackground>
  );
};
