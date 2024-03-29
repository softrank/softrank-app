import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams, Route, Navigate } from 'react-router';

import {
  Collapse,
  FlexSpace,
  ReadOnly,
  Title,
  Wrapper,
} from 'shared/components';
import { Input, InputGroup, Select } from 'shared/components/Form';
import { LoadingScreen } from 'shared/components/Loading';
import { finalResultOptions } from 'shared/data/finalResultOptions';
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
  const { control } = useForm<any>();

  useEffect(() => {
    if (roles && evaluation) {
      evaluatorService.get().then((me) => {
        const leader = evaluation.evaluators.filter(
          (ev) => ev.type === 'evaluator_leader'
        );
        if (me.id !== leader[0].memberId)
          return (
            <Route
              path="*"
              element={<Navigate to={`avaliacao/home/${id}`} replace />}
            />
          );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roles, evaluation]);

  useEffect(() => {
    loadEvaluation(id!);
    loadProcesses(id!);
    loadLevels(id!);
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
            <Collapse title="Resultado por processo">
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
            </Collapse>
            <Collapse title="Resultado por nível">
              {levels.map((level, index) => {
                return (
                  <InputGroup key={index}>
                    <ReadOnly
                      label="Nível"
                      value={`${level.initial} - ${level.name}`}
                    />
                    <Select
                      name={`level[${index}].result`}
                      label="Resultado"
                      placeholder="selecione um resultado"
                      control={control}
                      rules={{ required: true }}
                      optionValues={finalResultOptions}
                      optionLabel="label"
                      optionValue="value"
                    />
                  </InputGroup>
                );
              })}
            </Collapse>
          </FlexSpace>
        </Wrapper>
      )}
    </>
  );
};
