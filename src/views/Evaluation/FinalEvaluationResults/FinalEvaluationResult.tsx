import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router';

import {
  FlexSpace,
  ReadOnly,
  SubTitle,
  Title,
  Wrapper,
} from 'shared/components';
import { Input, InputGroup, Select } from 'shared/components/Form';
import { LoadingScreen } from 'shared/components/Loading';
import { EvaluationDetails } from 'shared/models/evaluationDetails';
import { EvaluationProcess } from 'shared/models/evaluationProcess';
import { ModelLevel } from 'shared/models/modelLevel';
import {
  evaluationService,
  evaluatorService,
  modelsService,
} from 'shared/services';
import { RootState } from 'shared/store';

export const FinalEvaluationResult = () => {
  const [evaluation, setEvaluation] = useState<EvaluationDetails>();
  const [loading, setLoading] = useState(false);
  const [processes, setProcesses] = useState<EvaluationProcess[]>([]);
  const [levels, setLevels] = useState<ModelLevel[]>([]);

  const { id } = useParams<{ id: string }>();
  const roles = useSelector<RootState>((state) => state.auth.roles);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<any>();

  useEffect(() => {
    if (roles && evaluation) {
      evaluatorService.get().then((me) => {
        const leader = evaluation.evaluators.filter(
          (ev) => ev.type === 'evaluator_leader'
        );
        if (me.id !== leader[0].memberId)
          return <Redirect to={`avaliacao/home/${id}`} />;
      });
    }
  }, [roles, evaluation]);

  useEffect(() => {
    loadEvaluation(id);
    loadProcesses(id);
    loadLevels(id);
  }, [id]);

  const loadProcesses = (id: string) => {
    setLoading(true);
    evaluationService
      .getProcesses(id)
      .then((processes) => setProcesses(processes))
      .finally(() => setLoading(false));
  };

  const loadEvaluation = (id: string) => {
    setLoading(true);
    evaluationService
      .getById(id)
      .then((evaluation) => setEvaluation(evaluation))
      .finally(() => setLoading(false));
  };

  const loadLevels = async (id: string) => {
    const evaluations = await evaluationService.list();
    const currentEvalution = evaluations.filter(
      (evaluation) => evaluation.id === id
    );
    const modelId = currentEvalution[0].modelLevel.modelId;
    modelsService
      .details(modelId)
      .then((model) => setLevels(model.modelLevels));
  };

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando..." />
      ) : (
        <Wrapper>
          <Title>Resultados da avaliação final</Title>
          <FlexSpace>
            <SubTitle>Resultados de processos</SubTitle>
            {processes.map((process, index) => {
              return (
                <InputGroup key={index}>
                  <ReadOnly label="Processo" value={process.name} />
                  <Select
                    name={`process[${index}].evaluatedLevel`}
                    label="Nível Avaliado"
                    placeholder="selecione um nível"
                    control={control}
                    rules={{ required: true }}
                    optionValues={levels}
                    optionLabel="initial"
                  />
                  <Input
                    name={`process[${index}].result`}
                    label="Resultado"
                    placeholder="resultado do processo"
                    control={control}
                  />
                </InputGroup>
              );
            })}
          </FlexSpace>
        </Wrapper>
      )}
    </>
  );
};
