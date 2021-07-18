import { useEffect, useState } from 'react';
import agent from '../../shared/api/agent';
import Wrapper from '../../shared/components/Layouts/Wrapper';
import { ModelEntity } from '../../shared/models/modelEntity';
import Card from '../../shared/components/Card/Card';
import Table from '../../shared/components/Table/Table';
import TableBody from '../../shared/components/Table/TableBody';
import TableHead from '../../shared/components/Table/TableHead';

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
