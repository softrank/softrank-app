import React from 'react';
import Wrapper from '../../../app/layouts/Layout/Wrapper';
import Card from '../../../components/Card/Card';
import Table from '../../../components/Table/Table';
import TableHead from '../../../components/Table/TableHead';

export default function ModelsList() {
  return (
    <Wrapper>
      <Card>
        <h2>Modelos</h2>
        <Table>
          <TableHead>
            <div>IN my head</div>
            <tr>
              <td>Nome</td>
              <td>Teste</td>
              <td>Descrição</td>
            </tr>
          </TableHead>
          <tr>
            <td>Nome</td>
            <td>Teste</td>
            <td>Descrição</td>
          </tr>
        </Table>
        <div>This is the list</div>
      </Card>
    </Wrapper>
  );
}
