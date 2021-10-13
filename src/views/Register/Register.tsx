import { useHistory } from 'react-router';

import { Title, Wrapper } from 'shared/components';
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
        <RegisterItem onClick={() => history.push('/auditor/cadastro')}>
          Auditor
        </RegisterItem>
        <RegisterItem
          onClick={() => history.push('/instituicaoAvalidadora/cadastro')}
        >
          Instituição avaliadora
        </RegisterItem>
        <RegisterItem onClick={() => history.push('/organizacao/cadastro')}>
          Organização
        </RegisterItem>
      </RegisterOptinos>
    </Wrapper>
  );
};
