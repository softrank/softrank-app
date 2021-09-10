import { useEffect, useState } from 'react';

import { Table } from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
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

  const formatDate = (date: any) => {
    return new Date(date.toString()).getFullYear();
  };

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando modelos..." />
      ) : (
        <Table headers={['Nome', 'Ano', 'Descrição']}>
          {models.map((model: ModelEntity, id) => {
            return (
              <tr key={id}>
                <td>{model.name}</td>
                <td>{formatDate(model.year)}</td>
                <td>{model.description}</td>
              </tr>
            );
          })}
        </Table>
      )}
    </>
  );
};
