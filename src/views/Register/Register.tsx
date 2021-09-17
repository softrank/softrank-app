import React from 'react';
import { useHistory } from 'react-router';

import Wrapper from 'shared/components/Layouts/Wrapper';
import { Title } from 'shared/components';
import { RegisterItem, RegisterOptinos } from './styled';

export const Register = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Title>Escolha o seu cadastro</Title>
      <RegisterOptinos>
        <RegisterItem onClick={() => history.push('/avaliador/cadastro')}>
          Avaliador
        </RegisterItem>
        <RegisterItem onClick={() => history.push('/404')}>
          Auditor
        </RegisterItem>
        <RegisterItem onClick={() => history.push('/404')}>
          Instituição avaliadora
        </RegisterItem>
        <RegisterItem onClick={() => history.push('/404')}>
          Organização
        </RegisterItem>
      </RegisterOptinos>
    </Wrapper>
  );
};
