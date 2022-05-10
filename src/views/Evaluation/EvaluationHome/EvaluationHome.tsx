import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import { Wrapper, Title, Divider, SubTitle, Button } from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
import { Evalutation } from 'shared/models/evaluation';
import { evaluatorService } from 'shared/services';

export const EvaluationHome = () => {
  const [evaluation, setEvaluation] = useState<Evalutation>();
  const [loading, setLoading] = useState(true);

  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() => {
    evaluatorService
      .getEvaluations()
      .then((evaluations) => {
        setEvaluation(evaluations[0]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando avaliação..." />
      ) : (
        <Wrapper>
          <Title>{evaluation?.name}</Title>
          <div>
            <SubTitle>
              Organização: {evaluation?.organizationalUnit.name}
            </SubTitle>
            <Divider />
          </div>
          <Button
            onClick={() =>
              history.push(`/avaliacao/planilha-de-requisitos/${id}`)
            }
          >
            Planilha de indicadores
          </Button>
          <Button onClick={() => history.push(`/relatorio-de-melhorias/${id}`)}>
            Relatório de melhorias
          </Button>
        </Wrapper>
      )}
    </>
  );
};
