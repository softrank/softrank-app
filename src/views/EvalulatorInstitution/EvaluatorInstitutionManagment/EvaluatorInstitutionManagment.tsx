import { useHistory } from 'react-router';
import { Wrapper, Title, AddIcon, SearchBox } from 'shared/components';
import { EvaluatorInstitutionList } from '../EvaluatorInstitutionList/EvaluatorInstitutionList';

export const EvaluatorInstitutionManagment = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Title>Instituições avaliadoras</Title>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <AddIcon
          onClick={() => history.push('/instituicaoAvalidadora/cadastro')}
        />
        <SearchBox />
      </div>
      <EvaluatorInstitutionList />
    </Wrapper>
  );
};
