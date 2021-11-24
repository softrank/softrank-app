import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { ActionCard, EditIcon, Table, Title, Wrapper } from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
import { ModelEntity } from 'shared/models/modelEntity';
import { modelsService } from 'shared/services';
import { ActionCardContainer } from './styled';

export const HomePage = () => {
  const [models, setModels] = useState<ModelEntity[]>([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

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
    <Wrapper>
      <Title>Atividades</Title>
      <ActionCardContainer>
        <ActionCard path="avaliacoes" title="Avaliações" icon="evaluation" />
        <ActionCard path="modelos" title="Modelos" icon="doc" />
        <ActionCard path="avaliacoes" title="Avaliações" icon="evaluation" />
        <ActionCard path="modelos" title="Modelos" icon="doc" />
      </ActionCardContainer>

      <Title>Minhas avaliações</Title>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando modelos..." />
      ) : (
        <Table
          headers={[
            'Nome',
            'Modelo',
            'Status',
            'Organização',
            'Data de início',
            'Ações',
          ]}
        >
          {models.map((model: ModelEntity, id) => {
            return (
              <tr key={id}>
                <td onClick={() => history.push('/modelos')}>{model.name}</td>
                <td>{formatDate(model.year)}</td>
                <td>{model.description}</td>
                <td>
                  <Link to={`/modelo/${model.id}`}>
                    <EditIcon />
                  </Link>
                </td>
              </tr>
            );
          })}
        </Table>
      )}
    </Wrapper>
  );
};
