import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { FlexSpace, Button, Options, Modal } from 'shared/components';
import {
  Form,
  InputGroup,
  RadioGroup,
  Radio,
  TextArea,
  Select,
} from 'shared/components/Form';
import { ImprovementDto } from 'shared/dtos/improvementDto';
import {
  EvaluationExpectedResult,
  EvaluationProcess,
} from 'shared/Types/evaluationProcess';
import { Improvement } from 'shared/Types/improvement';
import { evaluationService } from 'shared/services';
import { improvementsService } from 'shared/services/improvementsService';
import { IImprovementForm } from './IImprovementForm';

interface Props {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  evaluationId: string;
  loadImprovements: (id: string) => void;
  improvement?: Improvement;
}

export const ImprovementDetails = ({
  showModal,
  setShowModal,
  evaluationId,
  loadImprovements,
  improvement,
}: Props) => {
  const [processes, setProcesses] = useState<EvaluationProcess[]>([]);
  const [expectedResults, setExpectedResults] = useState<
    EvaluationExpectedResult[]
  >([]);

  const {
    handleSubmit,
    control,
    register,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IImprovementForm>();

  const onSubmit = handleSubmit((data) => saveImprovement(data));

  const assembleImprovement = (data: IImprovementForm) => {
    const improvement: ImprovementDto = {
      evaluationId: evaluationId,
      expectedResultId: data.expectedResult.value,
      type: data.type,
      problem: data.problem,
      suggestion: data.suggestion,
    };

    return improvement;
  };

  const saveImprovement = (data: IImprovementForm) =>
    improvementsService.create(assembleImprovement(data)).then(() => {
      setShowModal(false);
      loadImprovements(evaluationId);
    });

  useEffect(() => {
    evaluationService.getProcesses(evaluationId).then((processes) => {
      setProcesses(processes);
    });
  }, [evaluationId]);

  const watchProcesses = watch('process');

  useEffect(() => {
    if (watchProcesses) {
      reset({
        ...getValues(),
        expectedResult: undefined,
      });
      const processId = watchProcesses.value;
      const process = processes.find((process) => process.id === processId);
      process && setExpectedResults(process.expectedResults);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchProcesses]);

  useEffect(() => {
    improvement && reset({ id: improvement.id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [improvement]);

  return (
    <Modal
      title="Adicionar melhoria"
      showModal={showModal}
      setShowModal={setShowModal}
      width="80%"
      height="100%"
    >
      <div style={{ width: '100%' }}>
        <Form onSubmit={onSubmit}>
          <FlexSpace>
            <InputGroup>
              <Select
                name="process"
                label="Processo"
                placeholder="selecione"
                optionValues={processes}
                optionLabel="initial"
                control={control}
                rules={{ required: true }}
                errors={errors?.process}
              />
              <Select
                name="expectedResult"
                label="Resultado esperado"
                placeholder="selecione"
                optionValues={expectedResults}
                optionLabel="initial"
                disabled={expectedResults.length === 0}
                control={control}
                rules={{ required: true }}
                errors={errors?.expectedResult}
                optionValue="expectedResultId"
              />
              <RadioGroup label="Categoria">
                <Radio
                  name="type"
                  value="required"
                  legend="Requerido"
                  register={register}
                />
                <Radio
                  name="type"
                  value="improvement"
                  legend="Melhoria"
                  register={register}
                />
              </RadioGroup>
            </InputGroup>
            <InputGroup>
              <TextArea
                name="problem"
                label="Problema"
                placeholder="descreva o problema"
                control={control}
                rules={{ required: true }}
                errors={errors?.problem}
              />
            </InputGroup>
            <InputGroup>
              <TextArea
                name="suggestion"
                label="Sugestão para correção"
                placeholder="descreva a sugestão"
                control={control}
                rules={{ required: true }}
                errors={errors?.suggestion}
              />
            </InputGroup>
            <Options>
              <Button
                secondary
                type="button"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </Button>
              <Button type="submit">Salvar</Button>
            </Options>
          </FlexSpace>
        </Form>
      </div>
    </Modal>
  );
};
