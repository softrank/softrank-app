import { useHistory } from 'react-router';
import { AddIcon, SearchBox, Table, Title } from 'shared/components';
import Wrapper from 'shared/components/Layouts/Wrapper';
import { TableOptions } from './styled';

export const EvaluatorManagment = () => {
  // const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleAddEvaluator = () => history.push('/cadastro/avaliador');

  return (
    <Wrapper>
      <Title>Avaliadores</Title>
      <TableOptions>
        <AddIcon onClick={() => handleAddEvaluator()} />
        <SearchBox />
      </TableOptions>
      <Table headers={['Nome', 'Email', 'Celular']}>
        <tr>
          <td>Fulano Teste</td>
          <td>teste@teste.com</td>
          <td>(41) 99999-9999</td>
        </tr>
      </Table>
    </Wrapper>
  );
};
