import { useHistory } from 'react-router';

import { AddIcon, Divider, Title, Wrapper } from 'shared/components';
import { SubTitle } from 'shared/components/Titles/SubTitle';

export const EvaluationManagment = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Title>Avaliações</Title>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <AddIcon onClick={() => history.push('/avaliacao/nova')} />
      </div>
      <SubTitle>Em andamento</SubTitle>
      <Divider top="-20px" />
    </Wrapper>
  );
};
