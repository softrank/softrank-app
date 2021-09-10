import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { Collapse, Button, AddIcon } from 'shared/components';
import { InputGroup, Input, TextArea, Form } from 'shared/components/Form';
import FlexSpace from 'shared/components/Layouts/FlexSpace';
import { ExpectedResult } from 'shared/models/expectedResult';
import { ModelEntity } from 'shared/models/modelEntity';
import { Process } from 'shared/models/process';
import { ExpectedResultsFieldArray } from 'views/Model/ModelDetails/ExpectedResultsFieldArray';
import { Options, RemoveIcon } from 'views/Model/ModelDetails/styled';

interface FormFields {
  modelProcesses: Process[];
}

interface Props {
  setTabIndex: Dispatch<SetStateAction<number>>;
  model: ModelEntity;
  setModel: Dispatch<SetStateAction<ModelEntity>>;
}

export const ProcessesTab = ({ setTabIndex, model, setModel }: Props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormFields>();
  const {
    fields: modelProcesses,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'modelProcesses',
  });

  const addProcessHandler = () => {
    const expectedResult: ExpectedResult = {
      id: '',
      initial: '',
      description: '',
      modelLevels: [],
    };

    const process: Process = {
      id: '',
      initial: '',
      name: '',
      description: '',
      expectedResults: [expectedResult],
    };

    append(process);
  };

  const onSubmit = handleSubmit((data) => console.log(data));

  useEffect(() => {
    reset({
      modelProcesses: model.modelProcesses,
    });
  }, [model, reset]);

  return (
    <Form onSubmit={onSubmit}>
      <FlexSpace space="1.4rem">
        <AddIcon
          onClick={() => {
            addProcessHandler();
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
                  errors={errors?.modelProcesses?.[index]?.initial}
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
              />
            </Collapse>
          );
        })}
      </FlexSpace>
      <Options>
        <Button secondary onClick={() => setTabIndex(1)}>
          Voltar
        </Button>
        <Button type="submit">Próximo</Button>
      </Options>
    </Form>
  );
};
