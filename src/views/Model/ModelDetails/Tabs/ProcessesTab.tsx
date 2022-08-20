import { Dispatch, SetStateAction, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { Collapse, Button, AddIcon, FlexSpace } from 'shared/components';
import {
  InputGroup,
  Input,
  TextArea,
  Form,
  Select,
} from 'shared/components/Form';
import { capacityTypes } from 'shared/data/capacityTypes';
import { ExpectedResultDto } from 'shared/dtos/expectedResultDto';
import { ModelDto } from 'shared/dtos/modelDto';
import { ProcessDto } from 'shared/dtos/processDto';
import { ModelEntity } from 'shared/models/modelEntity';
import { Process } from 'shared/models/process';
import { ExpectedResultsFieldArray } from 'views/Model/ModelDetails/ExpectedResultsFieldArray';
import { Options, RemoveIcon } from 'views/Model/ModelDetails/styled';

interface Props {
  setTabIndex: Dispatch<SetStateAction<number>>;
  model: ModelEntity;
  createOrUpdateModel: (data: ModelDto, tabIndex: number) => Promise<void>;
  loading: boolean;
}

export const ProcessesTab = ({
  setTabIndex,
  model,
  createOrUpdateModel,
}: Props) => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<{ modelProcesses: Process[] }>();

  const {
    fields: modelProcesses,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'modelProcesses',
  });

  const submitProcesses = async (processes: Process[]) => {
    const formatedProcesses = processes.map((process) => {
      const formatedExpectedResults = process.expectedResults.map((er) => {
        const erDto: ExpectedResultDto = {
          initial: er.initial,
          name: er.name,
          description: er.description,
          minLevel: (er.minLevel = (er.minLevel as any).label),
          maxLevel: (er.maxLevel = (er.maxLevel as any).label),
        };
        if (er.id !== '' && er.id) erDto.id = er.id;
        return erDto;
      });

      const processDto: ProcessDto = {
        name: process.name,
        initial: process.initial,
        description: process.description,
        expectedResults: formatedExpectedResults,
        type: (process.type = (process.type as any).value),
      };

      if (process.id) processDto.id = process.id;

      return processDto;
    });

    const modelDto: ModelDto = {
      id: model.id,
      name: model.name,
      year: new Date(model.year),
      description: model.description,
      modelLevels: model.modelLevels,
      modelProcesses: formatedProcesses,
    };

    await createOrUpdateModel(modelDto, 3);
  };

  const onSubmit = handleSubmit(
    async (data) => await submitProcesses(data.modelProcesses)
  );

  useEffect(() => {
    reset({
      modelProcesses:
        model.modelProcesses && model.modelProcesses.length > 0
          ? model.modelProcesses
          : [new Process()],
    });
  }, [model, reset]);

  const watchProcess = watch('modelProcesses');

  return (
    <Form onSubmit={onSubmit}>
      <FlexSpace>
        <AddIcon
          onClick={() => {
            append(new Process());
          }}
        />
        {modelProcesses.map((process, index) => {
          return (
            <Collapse
              key={index}
              title={
                watchProcess[index].name === ''
                  ? 'Processo novo'
                  : watchProcess[index].name
              }
              options={<RemoveIcon onClick={() => remove(index)} />}
            >
              <InputGroup>
                <Input
                  name={`modelProcesses[${index}].name`}
                  label="Nome"
                  placeholder="nome do processo"
                  control={control}
                  rules={{ required: true }}
                  errors={errors?.modelProcesses?.[index]?.name}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  name={`modelProcesses[${index}].initial`}
                  label="Sigla"
                  placeholder="sigla do processo"
                  control={control}
                  rules={{ required: true }}
                  errors={errors?.modelProcesses?.[index]?.initial}
                />
                <Select
                  name={`modelProcesses[${index}].type`}
                  label="Capacidade"
                  placeholder="selecione uma capacidade"
                  control={control}
                  rules={{ required: true }}
                  optionValues={capacityTypes}
                  optionLabel="label"
                  optionValue="value"
                  errors={errors?.modelProcesses?.[index]?.type}
                />
              </InputGroup>
              <InputGroup>
                <TextArea
                  name={`modelProcesses[${index}].description`}
                  label="Descrição"
                  placeholder="descrição do processo"
                  control={control}
                  rules={{ required: true }}
                  errors={errors?.modelProcesses?.[index]?.description}
                />
              </InputGroup>
              <ExpectedResultsFieldArray
                processIndex={index}
                control={control}
                errors={errors}
                levels={model.modelLevels}
                watch={watchProcess}
              />
            </Collapse>
          );
        })}
      </FlexSpace>
      <Options>
        <Button secondary onClick={() => setTabIndex(1)}>
          Voltar
        </Button>
        <Button type="submit">Salvar</Button>
      </Options>
    </Form>
  );
};
