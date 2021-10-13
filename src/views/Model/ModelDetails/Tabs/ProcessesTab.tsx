import { Dispatch, SetStateAction, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { Collapse, Button, AddIcon } from 'shared/components';
import { InputGroup, Input, TextArea, Form } from 'shared/components/Form';
import FlexSpace from 'shared/components/Layouts/FlexSpace';
import { ModelDto } from 'shared/dtos/modelDto';
import { ModelEntity } from 'shared/models/modelEntity';
import { Process } from 'shared/models/process';
import { ExpectedResultsFieldArray } from 'views/Model/ModelDetails/ExpectedResultsFieldArray';
import { Options, RemoveIcon } from 'views/Model/ModelDetails/styled';

interface Props {
  setTabIndex: Dispatch<SetStateAction<number>>;
  model: ModelEntity;
  setModel: Dispatch<SetStateAction<ModelEntity>>;
  createOrUpdateModel: (data: ModelDto, tabIndex: number) => Promise<void>;
  loading: boolean;
}

export const ProcessesTab = ({
  setTabIndex,
  model,
  setModel,
  createOrUpdateModel,
  loading,
}: Props) => {
  const {
    handleSubmit,
    control,
    reset,
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

  const submitProcesses = async (data: Process[]) => {
    const modelDto: ModelDto = {
      id: model.id,
      name: model.name,
      year: new Date(model.year),
      description: model.description,
      modelLevels: model.modelLevels,
      modelProcesses: data,
    };

    await createOrUpdateModel(modelDto, 3);
  };

  const onSubmit = handleSubmit(
    async (data) => await submitProcesses(data.modelProcesses)
  );

  useEffect(() => {
    reset({
      modelProcesses: model.modelProcesses ?? new Process(),
    });
  }, [model, reset]);

  return (
    <Form onSubmit={onSubmit}>
      <FlexSpace space="1rem">
        <AddIcon
          onClick={() => {
            append(new Process());
          }}
        />
        {modelProcesses.map((process, index) => {
          return (
            <Collapse
              key={index}
              title={`Processo ${index + 1}`}
              options={<RemoveIcon onClick={() => remove(index)} />}
            >
              <InputGroup>
                <Input
                  name={`modelProcesses[${index}].initial`}
                  label="Sigla"
                  placeholder="sigla do processo"
                  control={control}
                  rules={{ required: true }}
                  errors={errors?.modelProcesses?.[index]?.initials}
                />
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