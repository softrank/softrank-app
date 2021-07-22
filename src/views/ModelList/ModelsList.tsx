import { useEffect, useState } from 'react';
import Wrapper from '../../shared/components/Layouts/Wrapper';
import { ModelEntity } from '../../shared/models/modelEntity';
import Card from '../../shared/components/Card/Card';
import Table from '../../shared/components/Table/Table';
import TableBody from '../../shared/components/Table/TableBody';
import TableHead from '../../shared/components/Table/TableHead';
import { modelsService } from '../../shared/services/modelsService';
import { LoadingHorizontal } from '../../shared/components/Loading/LoadingHorizontal';

export default function ModelsList() {
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
          <LoadingHorizontal
            loading={loading}
            size={10}
            // content="Carregando..."
          />
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
}
