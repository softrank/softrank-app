import React, { useEffect, useState } from 'react';
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
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  useEffect(() => {
    register('email', { required: true });
    register('password', {
      required: 'Necessario',
      minLength: {
        value: 8,
        message: 'A senha deve conter no mínimo 8 caracteres!',
      },
    });
  }, [register]);

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
              errors={errors.email}
            />
            <Input
              name="password"
              label="Senha"
              placeholder="insira a sua senha"
              control={control}
              type="password"
              errors={errors.password}
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
