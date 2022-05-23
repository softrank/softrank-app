import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { FlexSpace, Button, Options } from 'shared/components';
import {
  Form,
  InputGroup,
  RadioGroup,
  Radio,
  TextArea,
  Select,
} from 'shared/components/Form';
import {
  EvaluationExpectedResult,
  EvaluationProcess,
} from 'shared/models/evaluationProcess';
import { evaluationService } from 'shared/services';

interface Props {
  setShowModal: (state: boolean) => void;
  evaluationId: string;
}

export const ImprovementDetails = ({ setShowModal, evaluationId }: Props) => {
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
  } = useForm<any>();

  const onSubmit = handleSubmit((data) => console.log(data));

  useEffect(() => {
    evaluationService.getProcesses(evaluationId).then((processes) => {
      setProcesses(processes);
    });
  }, [evaluationId]);

  const watchProcesses = watch('process');

  useEffect(() => {
    if (watchProcesses) {
      reset({ ...getValues(), expectedResult: [] });
      const processId = watchProcesses.value;
      const process = processes.filter(
        (process) => process.id === processId
      )[0];
      if (process !== undefined) setExpectedResults(process.expectedResults);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchProcesses]);

  return (
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
              errors={errors?.level}
            />
            <Select
              name="expectedResult"
              label="Resultado esperado"
              placeholder="selecione"
              optionValues={expectedResults}
              optionLabel="name"
              disabled={expectedResults.length === 0}
              control={control}
              rules={{ required: true }}
              errors={errors?.expectedResult}
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
              name="sugestion"
              label="Sugestão para corrigir"
              placeholder="descreva a sugestão"
              control={control}
              rules={{ required: true }}
              errors={errors?.sugestion}
            />
          </InputGroup>
          <Options>
            <Button secondary type="button" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </Options>
        </FlexSpace>
      </Form>
    </div>
  );
};
