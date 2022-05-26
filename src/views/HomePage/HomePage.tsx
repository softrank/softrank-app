import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { RootState } from 'shared/store';
import { ActionCard, ExitIcon, Table, Title, Wrapper } from 'shared/components';
import { LoadingSpinner } from 'shared/components/Loading';
import { evaluationService } from 'shared/services';
import { ActionCardContainer, Hero, HeroImage, HeroTitle } from './styled';
import organization from 'shared/assets/images/organization.svg';
import { EvalutionResponse } from 'shared/models/evaluationResponse';
import { ModelsList } from 'views/Model';

export const HomePage = () => {
  const [evaluations, setEvaluations] = useState<EvalutionResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [userRoles, setUserRoles] = useState<any[]>([]);

  const roles = useSelector<RootState>((state) => state.auth.roles);

  const history = useHistory();

  useEffect(() => {
    const rolesArray: any[] = roles as any[];
    setUserRoles(rolesArray);
  }, [roles]);

  useEffect(() => {
    evaluationService
      .list()
      .then((evaluations) => {
        setEvaluations(evaluations);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Wrapper>
      <Hero>
        <HeroTitle>Seja bem vindo à SoftRank!</HeroTitle>
        <HeroImage src={organization} alt="welcome" />
      </Hero>
      {(userRoles.includes('evaluator') ||
        userRoles.includes('modelManager')) && (
        <>
          <Title>Atividades</Title>
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
        </>
      )}

      {(userRoles.includes('evaluator') ||
        userRoles.includes('organizationalUnit')) && (
        <>
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
                'Estado',
                'Organização',
                'Modelo',
                'Nível',
                'Ações',
              ]}
            >
              {evaluations.map((evaluation, id) => {
                return (
                  <tr key={id}>
                    <td>{evaluation.name}</td>
                    <td>{evaluation.state}</td>
                    <td>{evaluation.organizationalUnit.name}</td>
                    <td>{evaluation.modelLevel.modelName}</td>
                    <td>{evaluation.modelLevel.initial}</td>
                    <td>
                      <Link to={`/avaliacao/${evaluation.id}`}>
                        <ExitIcon />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </Table>
          )}
        </>
      )}

      {userRoles.includes('modelManager') && (
        <>
          <Title>Modelos</Title>
          <ModelsList />
        </>
      )}
    </Wrapper>
  );
};
