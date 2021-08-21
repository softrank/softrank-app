import { useHistory } from 'react-router';
import { AddIcon, SearchBox, Title } from 'shared/components';
import Wrapper from 'shared/components/Layouts/Wrapper';
import { Table, TableHead, TableBody } from 'shared/components/Table';
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

      <Table>
        <TableHead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Celular</th>
          </tr>
        </TableHead>
        <TableBody>
          <tr>
            <td>Fulano Teste</td>
            <td>teste@teste.com</td>
            <td>(41) 99999-9999</td>
          </tr>
        </TableBody>
      </Table>
    </Wrapper>
  );
};
