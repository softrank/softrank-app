import { useNavigate } from 'react-router';
import { Wrapper, Title, AddIcon, SearchBox } from 'shared/components';
import { EvaluatorInstitutionList } from '../EvaluatorInstitutionList/EvaluatorInstitutionList';

export const EvaluatorInstitutionManagment = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>Instituições avaliadoras</Title>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <AddIcon onClick={() => navigate('/instituicaoAvalidadora/cadastro')} />
        <SearchBox />
      </div>
      <EvaluatorInstitutionList />
    </Wrapper>
  );
};
