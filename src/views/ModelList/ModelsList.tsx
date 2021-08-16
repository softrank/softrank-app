import { useEffect, useState } from 'react';

import Wrapper from '../../shared/components/Layouts/Wrapper';
import { ModelEntity } from '../../shared/models/modelEntity';
import { modelsService } from '../../shared/services';
import { Card } from '../../shared/components';
import { Table, TableBody, TableHead } from '../../shared/components/Table';
import { LoadingScreen } from '../../shared/components/Loading';

export const ModelsList = () => {
  const [models, setModels] = useState<ModelEntity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    modelsService
      .list()
      .then((response) => {
        setModels(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <Wrapper>
      <Card>
        <h2>Modelos</h2>
        {loading ? (
          <LoadingScreen loading={loading} content="Carregando modelos..." />
        ) : (
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
        )}
      </Card>
    </Wrapper>
  );
};
