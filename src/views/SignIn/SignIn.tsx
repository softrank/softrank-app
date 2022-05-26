import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import loginImage from 'shared/assets/images/login.svg';
import { Button } from 'shared/components';
import { Form, Input } from 'shared/components/Form';
import { signDto } from 'shared/dtos/signDto';
import { userService } from 'shared/services';
import { authActions } from 'shared/store';
import {
  ErrorNote,
  LinkButton,
  RegisterInfo,
  SignInBackground,
  SignInForm,
  SignInFormContent,
  SignInImage,
  SignInInfo,
  SignInInputs,
  SignInTitle,
} from './styled';

export const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignIn = (data: any) => {
    setLoading(true);

    const signIn: signDto = {
      login: data.email,
      password: data.password,
    };

    userService
      .signin(signIn)
      .then((res) => {
        dispatch(authActions.signin(res));
        setLoading(false);
        history.push('/');
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  const onSubmit = handleSubmit((data) => handleSignIn(data));

  useEffect(() => {
    register('email', {
      required: true,
      pattern: {
        value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i,
        message: 'Email inválido',
      },
    });
    register('password', {
      required: true,
    });
  }, [register]);

  return (
    <SignInBackground>
      <SignInInfo>
        <SignInImage src={loginImage} alt="Login image" />
      </SignInInfo>
      <Form onSubmit={onSubmit}>
        <SignInForm>
          <SignInFormContent>
            <SignInTitle>Entre em sua conta</SignInTitle>
            <SignInInputs>
              <Input
                name="email"
                label="Email"
                placeholder="insira o seu email"
                control={control}
                type="email"
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
              {error && <ErrorNote>Email ou senha incorretos</ErrorNote>}
              <Button type="submit" width="100%" loading={loading}>
                login
              </Button>
              <RegisterInfo>
                Ainda não é cadastrado?
                <LinkButton onClick={() => history.push('/cadastro')}>
                  Cadastre-se
                </LinkButton>
              </RegisterInfo>
            </SignInInputs>
          </SignInFormContent>
        </SignInForm>
      </Form>
    </SignInBackground>
  );
};
