import { useState } from 'react';
import { useHistory } from 'react-router';
import { AddIcon, Title } from 'shared/components';
import Wrapper from 'shared/components/Layouts/Wrapper';
import { LoadingScreen } from 'shared/components/Loading';
import { SearchBox } from 'shared/components/SearchBox/SearchBox';
import { Table, TableHead, TableBody } from 'shared/components/Table';
import { TableOptions } from './styled';

export const EvaluatorManagment = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleAddEvaluator = () => history.push('/cadastro/avaliador');

  return (
    <Wrapper>
      <Title>Avaliadores</Title>
      <TableOptions>
        <AddIcon onClick={() => handleAddEvaluator()} />
        <SearchBox />
      </TableOptions>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando avaliadores..." />
      ) : (
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
      )}
    </Wrapper>
  );
};
