import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';

import {
  Wrapper,
  Title,
  Divider,
  SubTitle,
  ActionCard,
} from 'shared/components';
import { FileInput, Form } from 'shared/components/Form';
import { LoadingScreen } from 'shared/components/Loading';
import { evaluationService } from 'shared/services';
import { OptionsContainer, TitleContainer } from './styled';

export const EvaluationHome = () => {
  const [evaluation, setEvaluation] = useState<any>();
  const [loading, setLoading] = useState(true);

  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm<any>();

  useEffect(() => {
    evaluationService
      .getById(id)
      .then((evaluation) => {
        setEvaluation(evaluation);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando avaliação..." />
      ) : (
        <Wrapper>
          <TitleContainer>
            <Title>{evaluation?.name}</Title>
            <SubTitle>
              Organização: {evaluation?.orgranizationalUnit?.name}
            </SubTitle>
          </TitleContainer>
          <div>
            <SubTitle>Ações</SubTitle>
            <Divider />
          </div>
          <OptionsContainer>
            <ActionCard
              onClick={() =>
                history.push(`/avaliacao/planilha-de-requisitos/${id}`)
              }
              title="Planilha de indicadores"
              icon="list"
            />
            <ActionCard
              onClick={() => history.push(`/relatorio-de-melhorias/${id}`)}
              title="Relatório de melhorias"
              icon="report"
            />
          </OptionsContainer>
          <div>
            <SubTitle>Plano de avaliação</SubTitle>
            <Divider />
            <Form onSubmit={onSubmit}>
              <FileInput
                label=""
                name="evaluationPlan"
                control={control}
                rules={{ required: true }}
                errors={errors?.evaluationPlan}
                reset={reset}
                getValues={getValues}
              />
            </Form>
          </div>
        </Wrapper>
      )}
    </>
  );
};
