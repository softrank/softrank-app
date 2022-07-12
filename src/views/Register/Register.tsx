import { useNavigate } from 'react-router';

import { Title, Wrapper } from 'shared/components';
import { RegisterItem, RegisterOptinos } from './styled';

export const Register = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>Escolha o seu cadastro</Title>
      <RegisterOptinos>
        <RegisterItem onClick={() => navigate('/avaliador/cadastro')}>
          Avaliador
        </RegisterItem>
        <RegisterItem onClick={() => navigate('/auditor/cadastro')}>
          Auditor
        </RegisterItem>
        <RegisterItem
          onClick={() => navigate('/instituicaoAvalidadora/cadastro')}
        >
          Instituição avaliadora
        </RegisterItem>
        <RegisterItem onClick={() => navigate('/organizacao/cadastro')}>
          Organização
        </RegisterItem>
      </RegisterOptinos>
    </Wrapper>
  );
};
