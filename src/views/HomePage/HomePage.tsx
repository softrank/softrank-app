import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { RootState } from 'shared/store';
import { ActionCard, EditIcon, Table, Title, Wrapper } from 'shared/components';
import { LoadingSpinner } from 'shared/components/Loading';
import { ModelEntity } from 'shared/models/modelEntity';
import { modelsService } from 'shared/services';
import { ActionCardContainer } from './styled';
import success from 'shared/assets/images/success.svg';

export const HomePage = () => {
  const [models, setModels] = useState<ModelEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [userRoles, setUserRoles] = useState<any[]>([]);

  const roles = useSelector<RootState>((state) => state.auth.roles);

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

  useEffect(() => {
    const rolesArray: any[] = roles as any[];
    setUserRoles(rolesArray);
  }, [roles]);

  const formatDate = (date: any) => {
    return new Date(date.toString()).getFullYear();
  };

  return (
    <Wrapper>
      <Title>Atividades</Title>
      <div>
        <span>testing</span>
        <img src={success} alt="welcome" />
      </div>
      <ActionCardContainer>
        <ActionCard
          onClick={() => history.push('avaliacoes')}
          title="Avaliações"
          icon="evaluation"
        />
        {userRoles.includes('evaluator') && (
          <ActionCard
            onClick={() => history.push('/avaliacao-nova')}
            title="Adicionar avaliação"
            icon="add"
          />
        )}
        {userRoles.includes('modelManager') && (
          <>
            <ActionCard
              onClick={() => history.push('modelos')}
              title="Modelos"
              icon="doc"
            />
            <ActionCard
              onClick={() => history.push('modelo')}
              title="Adicionar modelo"
              icon="add"
            />
          </>
        )}
      </ActionCardContainer>

      <Title>Minhas avaliações</Title>
      {loading ? (
        <LoadingSpinner
          loading={loading}
          content="Carregando suas avaliações..."
          size={80}
        />
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
