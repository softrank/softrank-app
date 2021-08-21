import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import Wrapper from 'shared/components/Layouts/Wrapper';
import { ExpectedResult } from 'shared/models/expectedResult';
import { ModelEntity } from 'shared/models/modelEntity';
import { ModelLevel } from 'shared/models/modelLevel';
import { Process } from 'shared/models/process';
import { modelsService } from 'shared/services';
import { ExpectedResultsFieldArray } from './expectedResultsFieldArray';
import { Collapse, Button, Title } from 'shared/components';
import {
  Form,
  Input,
  DateInput,
  TextArea,
  InputGroup,
} from 'shared/components/Form';
import {
  ConfirmationMessage,
  ErrorMessage,
  SuccessMessage,
} from 'shared/components/Messages';
import {
  AddIcon,
  CollapseContent,
  LevelGroup,
  RemoveIcon,
  GroupDivider,
  Options,
} from './styled';

const newModel: ModelEntity = {
  id: '',
  name: '',
  year: new Date(),
  description: '',
  modelLevels: [
    {
      id: '',
      initial: '',
      name: '',
    },
  ],
  modelProcesses: [
    {
      id: '',
      initial: '',
      name: '',
      description: '',
      expectedResults: [
        {
          id: '',
          initial: '',
          description: '',
          modelLevels: [''],
        },
      ],
    },
  ],
};

export const ModelForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [collapseLevels, setCollapseLevels] = useState(false);
  const [collapseProcesses, setCollapseProcesses] = useState(false);
  const [model, setModel] = useState<ModelEntity>(newModel);
  const [models, setModels] = useState<ModelEntity[]>([]);

  //#region Form

  const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors },
  } = useForm<ModelEntity>();

  const {
    fields: levels,
    append: levelsAppend,
    remove: levelsRemove,
  } = useFieldArray({
    control,
    name: 'modelLevels',
  });
  const {
    fields: processes,
    append: processesAppend,
    remove: processesRemove,
  } = useFieldArray({
    control,
    name: 'modelProcesses',
  });

  const handleCreateOrEditModel = (data: any) => {
    setLoading(true);

    const model: ModelEntity = {
      id: data.id,
      name: data.name,
      year: data.year,
      description: data.description,
      modelLevels: data.modelLevels,
      modelProcesses: data.modelProcesses,
    };

    if (model.id) {
      modelsService
        .update(model)
        .then(() => {
          setModels([...models.filter((x) => x.id !== model.id), model]);
          setModel(model);
          handleSuccessMessage('Modelo atualizado!');
        })
        .catch((error) => {
          handleErrorMessage(error);
        });
    } else {
      modelsService
        .create(model)
        .then(() => {
          setModels([...models, model]);
          handleSuccessMessage('Modelo criado!');
          setModel(model);
        })
        .catch((error) => {
          handleErrorMessage(error);
        });
    }
  };

  const handleAddLevel = () => {
    const level: ModelLevel = {
      id: '',
      initial: '',
      name: '',
    };

    levelsAppend(level);
  };

  const handleAddProcess = () => {
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

    processesAppend(process);
  };

  const onSubmit = handleSubmit((data) => handleCreateOrEditModel(data));

  //#endregion

  //#region Messages

  const handleErrorMessage = (error: any) => {
    setLoading(false);
    setError(error);
    setShowErrorMessage(true);
    setShowModal(false);
  };

  const handleSuccessMessage = (title: string) => {
    setLoading(false);
    setSuccessMessage(title);
    setShowSuccessMessage(true);
    setShowModal(false);
  };

  //#endregion

  //#region Effects

  useEffect(() => {
    modelsService.list().then((response) => {
      setModels(response);
    });
  }, []);

  useEffect(() => {
    reset({
      id: model.id,
      name: model.name,
      year: model.year,
      description: model.description,
      modelLevels: model.modelLevels,
      modelProcesses: model.modelProcesses,
    });
  }, [model, reset]);

  useEffect(() => {
    register('name', { required: true });
    register('year', { required: true });
    register('description', {
      required: true,
      minLength: {
        value: 20,
        message: 'A descrição deve conter no mínimo 20 caracteres!',
      },
      maxLength: {
        value: 200,
        message: 'A descrição deve conter no máximo 200 caracteres!',
      },
    });
  }, [register]);

  //#endregion

  return (
    <>
      <Wrapper>
        <Title>Cadastrar modelo</Title>
        <Form onSubmit={onSubmit}>
          <InputGroup>
            <Input
              name="name"
              label="Modelo"
              placeholder="selecione um modelo"
              control={control}
              errors={errors.name}
            />
            <DateInput
              label="Ano"
              name="year"
              placeholder="selecione um ano"
              control={control}
              yearPicker
              dateFormat="yyyy"
              errors={errors.year}
            />
          </InputGroup>
          <InputGroup>
            <TextArea
              name="description"
              label="Descrição"
              placeholder="descrição do modelo"
              control={control}
              errors={errors.description}
            />
          </InputGroup>
          <Collapse
            underline
            title="Níveis"
            collapse={collapseLevels}
            setCollapse={setCollapseLevels}
            options={<AddIcon onClick={() => handleAddLevel()} />}
          >
            {levels.map(({ id }, index) => {
              return (
                <div key={id}>
                  <CollapseContent>
                    <LevelGroup>
                      <Input
                        name={`modelLevels[${index}].initial`}
                        label="Sigla"
                        placeholder="sigla do nível"
                        control={control}
                        rules={{ required: true }}
                        errors={errors?.modelLevels?.[index]?.initial}
                      />
                      <Input
                        name={`modelLevels[${index}].name`}
                        label="Nome"
                        placeholder="nome do nível"
                        control={control}
                        rules={{ required: true }}
                        errors={errors?.modelLevels?.[index]?.name}
                      />
                    </LevelGroup>
                    <RemoveIcon onClick={() => levelsRemove(index)} />
                  </CollapseContent>
                  {index !== levels.length - 1 && <GroupDivider />}
                </div>
              );
            })}
          </Collapse>
          <Collapse
            underline
            title="Processos"
            collapse={collapseProcesses}
            setCollapse={setCollapseProcesses}
            options={<AddIcon onClick={() => handleAddProcess()} />}
          >
            {processes.map((process, index) => {
              return (
                <Collapse
                  key={process.id}
                  title={`Processo ${index + 1}`}
                  options={
                    <RemoveIcon onClick={() => processesRemove(index)} />
                  }
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
                    nestIndex={index}
                    control={control}
                    model={model}
                    errors={errors}
                  />
                </Collapse>
              );
            })}
          </Collapse>
          <Options>
            <Button secondary type="button">
              Cancelar
            </Button>
            <Button type="button" onClick={() => setShowModal(true)}>
              Salvar
            </Button>
          </Options>
          <ConfirmationMessage
            title="Confirmar modelo"
            showMessage={showModal}
            setShowMessage={setShowModal}
            loading={loading}
            cancelAction={() => setShowModal(false)}
            confirmAction={() => onSubmit()}
          />
        </Form>
      </Wrapper>
      {showErrorMessage && (
        <ErrorMessage
          showMessage={showErrorMessage}
          setShowMessage={setShowErrorMessage}
          error={error}
        />
      )}
      {showSuccessMessage && (
        <SuccessMessage
          showMessage={showSuccessMessage}
          setShowMessage={setShowSuccessMessage}
          title={successMessage}
          path="/listarModelos"
        />
      )}
    </>
  );
};
