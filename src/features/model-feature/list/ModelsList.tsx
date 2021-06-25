import { useEffect, useState } from 'react';
import agent from '../../../app/api/agent';
import Wrapper from '../../../app/layouts/Layout/Wrapper';
import { ModelEntity } from '../../../app/models/modelEntity';
import Card from '../../../components/Card/Card';
import Table from '../../../components/Table/Table';
import TableBody from '../../../components/Table/TableBody';
import TableHead from '../../../components/Table/TableHead';

export default function ModelsList() {
  const [models, setModels] = useState<ModelEntity[]>([]);

  useEffect(() => {
    agent.Models.list().then((response) => {
      setModels(response);
    });
  }, []);

  return (
    <Wrapper>
      <Card>
        <h2>Modelos</h2>
        <Table>
          <TableHead>
            <tr>
              <td>Nome</td>
              <td>Teste</td>
              <td>Descrição</td>
            </tr>
          </TableHead>
          <TableBody>
            {models.map((model: ModelEntity, id) => {
              return (
                <tr key={id}>
                  <td>{model.name}</td>
                  <td>{model.year}</td>
                  <td>{model.description}</td>
                </tr>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </Wrapper>
  );
}
