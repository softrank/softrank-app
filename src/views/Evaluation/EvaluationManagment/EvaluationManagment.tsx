import { useNavigate } from 'react-router';

import { AddIcon, Divider, Title, Wrapper } from 'shared/components';
import { SubTitle } from 'shared/components/Titles/SubTitle';
import { EvaluationList } from '../EvaluationList/EvaluationList';

export const EvaluationManagment = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>Avaliações</Title>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <AddIcon onClick={() => navigate('/avaliacao-nova')} />
      </div>
      <div>
        <SubTitle>Minhas avaliações</SubTitle>
        <Divider />
        <EvaluationList />
      </div>
    </Wrapper>
  );
};
