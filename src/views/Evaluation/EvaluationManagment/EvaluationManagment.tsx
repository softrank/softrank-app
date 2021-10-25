import { useHistory } from 'react-router';

import { AddIcon, Title, Wrapper } from 'shared/components';

export const EvaluationManagment = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Title>Avaliações</Title>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <AddIcon onClick={() => history.push('/avaliacao/nova')} />
      </div>
    </Wrapper>
  );
};
