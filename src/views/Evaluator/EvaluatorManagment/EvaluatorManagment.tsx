import { useHistory } from 'react-router';

import { Wrapper, Title, AddIcon, SearchBox, Table } from 'shared/components';
import { TableOptions } from './styled';

export const EvaluatorManagment = () => {
  const history = useHistory();

  const handleAddEvaluator = () => history.push('/avaliadores/cadastro');

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
