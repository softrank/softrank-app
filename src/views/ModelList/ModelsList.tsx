import { useEffect, useState } from 'react';

import Wrapper from 'shared/components/Layouts/Wrapper';
import { Title } from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
import { Table, TableHead, TableBody } from 'shared/components/Table';
import { ModelEntity } from 'shared/models/modelEntity';
import { modelsService } from 'shared/services';

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

  const formatDate = (date: Date) => {
    return new Date(date.toString()).getFullYear();
  };

  return (
    <Wrapper>
      <Title>Modelos</Title>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando modelos..." />
      ) : (
        <Table>
          <TableHead>
            <tr>
              <th>Nome</th>
              <th>Ano</th>
              <th>Descrição</th>
            </tr>
          </TableHead>
          <TableBody>
            {models.map((model: ModelEntity, id) => {
              return (
                <tr key={id}>
                  <td>{model.name}</td>
                  <td>{formatDate(model.year)}</td>
                  <td>{model.description}</td>
                </tr>
              );
            })}
          </TableBody>
        </Table>
      )}
    </Wrapper>
  );
};
