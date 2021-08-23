import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import loginImage from 'shared/assets/images/login.svg';
import { Button } from 'shared/components';
import { Form, Input } from 'shared/components/Form';
import { signDto } from 'shared/dtos/signDto';
import { authService } from 'shared/services';
import { authActions } from 'shared/store';
import {
  SignInBackground,
  SignInForm,
  SignInFormContent,
  SignInImage,
  SignInInfo,
  SignInTitle,
} from './styled';

export const SignIn = () => {
  const [loading, setLoading] = useState(false);
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

    authService
      .signin(signIn)
      .then((res) => {
        dispatch(authActions.signin(res));
        setLoading(false);
        history.push('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const onSubmit = handleSubmit((data) => handleSignIn(data));

  useEffect(() => {
    register('email', { required: true });
    register('password', {
      required: true,
      minLength: {
        value: 8,
        message: 'A senha deve conter no mínimo 8 caracteres!',
      },
    });
  }, [register]);

  return (
    <SignInBackground>
      <SignInInfo>
        <SignInImage src={loginImage} alt="Login image" />
      </SignInInfo>
      <Form onSubmit={onSubmit}>
        <SignInForm>
          <SignInTitle>Entre em sua conta</SignInTitle>
          <SignInFormContent>
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
          </SignInFormContent>
        </SignInForm>
      </Form>
    </SignInBackground>
  );
};
