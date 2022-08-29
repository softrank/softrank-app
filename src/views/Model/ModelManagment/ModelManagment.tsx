import { AddIcon, SearchBox, Title, Wrapper } from 'shared/components';
import { ModelsList } from 'views';
import { useNavigate } from 'react-router';

export const ModelManagment = () => {
  const navigate = useNavigate();
  const handleAddModel = () => navigate('/modelo');

  return (
    <Wrapper>
      <Title>Modelos</Title>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <AddIcon onClick={() => handleAddModel()} />
        <SearchBox />
      </div>
      <ModelsList />
    </Wrapper>
  );
};
