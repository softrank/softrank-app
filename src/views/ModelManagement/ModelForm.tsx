import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { ModelEntity } from '../../shared/models/modelEntity';
import Button from '../../shared/components/Buttons/Button';
import Form from '../../shared/components/Form/Form';
import { TextArea } from '../../shared/components/Form/TextArea/TextArea';
import {
  Options,
  InputGroup,
  LevelGroup,
  GroupDivider,
  AddIcon,
  RemoveIcon,
  CollapseContent,
} from './styled';
import { DateInput } from '../../shared/components/Form/DateInput/DateInput';
import { ButtonSeconday } from '../../shared/components/Buttons/ButtonSecondary';
import { ErrorMessage } from '../../shared/components/Messages/ErrorMessage/ErrorMessage';
import { SuccessMessage } from '../../shared/components/Messages/SuccessMessage/SuccessMessage';
import { Select } from '../../shared/components/Form/Select/Select';
import { modelsService } from '../../shared/services/modelsService';
import { Collapse } from '../../shared/components/Collapse/Collapse';
import Input from '../../shared/components/Form/Input/Input';
import { ModelLevel } from '../../shared/models/modelLevel';
import { ConfirmationMessage } from '../../shared/components/Messages/ConfirmationMessage/ConfirmationMessage';
import { Process } from '../../shared/models/process';
import { ExpectedResult } from '../../shared/models/expectedResult';

const ModelOptions = [
  {
    id: 1,
    title: 'MPS.BR Software',
  },
  {
    id: 2,
    title: 'MPS.BR Serviços',
  },
];

interface Props {
  models: ModelEntity[];
  setModels: (models: ModelEntity[]) => void;
  model: ModelEntity;
  setModel: (model: ModelEntity) => void;
}

export const ModelForm = ({ models, setModels, model, setModel }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [collapseLevels, setCollapseLevels] = useState(false);
  const [collapseProcesses, setCollapseProcesses] = useState(false);

  const { handleSubmit, control, reset } = useForm<ModelEntity>({
    shouldUnregister: false,
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

    console.log(model);

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

  const handleAddLevel = () => {
    setCollapseLevels(false);

    const modelValue = model;

    const modelLevel: ModelLevel = {
      id: '',
      initial: '',
      name: '',
    };

    modelValue.modelLevels.push(modelLevel);

    setModel(modelValue);
  };

  const handleRemoveLevel = (index: number) => {
    const modelValue = model;

    model.modelLevels.splice(index, 1);

    setModel(modelValue);
  };

  const handleInputChange = (
    name: string,
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const modelValue = model;

    if (model.modelLevels[index].id === '') {
      model.modelLevels[index].id = `${index + 1}`;
    }

    if (name === 'initial') {
      model.modelLevels[index].initial = e.target.value;
    } else if (name === 'name') {
      model.modelLevels[index].name = e.target.value;
    }

    setModel(modelValue);
  };

  const handleAddProcess = () => {
    setCollapseProcesses(false);

    const modelValue = model;

    const modelProcess: Process = {
      id: '',
      initial: '',
      name: '',
      description: '',
      expectedResults: [],
    };

    modelValue.modelProcesses.push(modelProcess);

    setModel(modelValue);
  };

  const handleRemoveProcess = (index: number) => {
    const modelValue = model;

    modelValue.modelProcesses.splice(index, 1);

    setModel(modelValue);
  };

  const handleChangeProcessInput = (name: string, index: number, e: any) => {
    const modelValue = model;

    if (modelValue.modelProcesses[index].id === '') {
      modelValue.modelProcesses[index].id = `${index + 1}`;
    }

    if (name === 'initial') {
      modelValue.modelProcesses[index].initial = e.target.value;
    } else if (name === 'name') {
      modelValue.modelProcesses[index].name = e.target.value;
    } else if (name === 'description') {
      modelValue.modelProcesses[index].description = e.target.value;
    }

    setModel(modelValue);
  };

  const handleAddExpectedResult = (index: number) => {
    setCollapseProcesses(false);

    const modelValue = model;

    const expectedResult: ExpectedResult = {
      id: '',
      initial: '',
      description: '',
      modelLevels: [],
    };

    modelValue.modelProcesses[index].expectedResults.push(expectedResult);

    setModel(modelValue);
  };

  const handleRemoveExpectedResult = (index: number, indexER: number) => {
    const modelValue = model;

    modelValue.modelProcesses[index].expectedResults.splice(indexER, 1);

    setModel(modelValue);
  };

  const handleChangeExpectedResultInput = (
    name: string,
    index: number,
    e: any,
    parentIndex: number
  ) => {
    const modelValue = model;

    if (parentIndex !== undefined) {
      if (name === 'initial') {
        modelValue.modelProcesses[parentIndex].expectedResults[index].initial =
          e.target.value;
      } else if (name === 'description') {
        modelValue.modelProcesses[parentIndex].expectedResults[
          index
        ].description = e.target.value;
      }
    }

    setModel(modelValue);
  };

  useEffect(() => {
    reset({
      id: model.id,
      name: model.name,
      year: model.year,
      description: model.description,
      modelProcesses: model.modelProcesses,
      modelLevels: model.modelLevels,
    });
  }, [model, reset]);

  const onSubmit = handleSubmit((data) => handleCreateOrEditModel(data));

  return (
    <>
      <DevTool control={control} placement="top-left" />
      <Form onSubmit={onSubmit}>
        <InputGroup>
          {/* <Select
            name="name"
            label="Modelo"
            placeholder="selecione um modelo"
            control={control}
            optionValues={ModelOptions}
            optionLabel="title"
            optionValue="title"
            defaultValue={model.name}
          /> */}
          <Input
            name="name"
            label="Modelo"
            placeholder="selecione um modelo"
            control={control}
            value={model.name}
          />
          <DateInput
            label="Ano"
            name="year"
            placeholder="selecione um ano"
            control={control}
            yearPicker
            dateFormat="yyyy"
            shouldUnregister={false}
          />
        </InputGroup>
        <InputGroup>
          <TextArea
            name="description"
            label="Descrição"
            placeholder="descrição do modelo"
            control={control}
            value={model.description}
          />
        </InputGroup>
        <Collapse
          title="Níveis"
          collapse={collapseLevels}
          setCollapse={setCollapseLevels}
          options={<AddIcon onClick={() => handleAddLevel()} />}
        >
          {model.modelLevels.map((level, index) => {
            return (
              <div key={index}>
                <CollapseContent>
                  <LevelGroup>
                    <Input
                      name={`modelValue.modelLevels[${index}].initial`}
                      label="Sigla"
                      placeholder="sigla do nível"
                      control={control}
                      index={index}
                      value={level.initial}
                      inputName="initial"
                      onChangeArray={handleInputChange}
                    />
                    <Input
                      name={`modelValue.modelLevels[${index}].name`}
                      label="Nome"
                      placeholder="nome do nível"
                      control={control}
                      index={index}
                      value={level.name}
                      inputName="name"
                      onChangeArray={handleInputChange}
                    />
                  </LevelGroup>
                  <RemoveIcon onClick={() => handleRemoveLevel(index)} />
                </CollapseContent>
                {index !== model.modelLevels.length - 1 && <GroupDivider />}
              </div>
            );
          })}
        </Collapse>
        <Collapse
          title="Processos"
          collapse={collapseProcesses}
          setCollapse={setCollapseProcesses}
          options={<AddIcon onClick={() => handleAddProcess()} />}
        >
          {model.modelProcesses.map((process, index) => {
            return (
              <Collapse
                key={index}
                title={
                  process.name !== ''
                    ? process.name
                    : 'Insira o nome do processo*'
                }
                options={
                  <RemoveIcon onClick={() => handleRemoveProcess(index)} />
                }
              >
                <InputGroup>
                  <Input
                    name={`model.modelProcesses[${index}].initial`}
                    label="Sigla"
                    placeholder="sigla do processo"
                    control={control}
                    value={process.initial}
                    inputName="initial"
                    index={index}
                    onChangeArray={handleChangeProcessInput}
                  />
                  <Input
                    name={`model.modelProcesses[${index}].name`}
                    label="Nome"
                    placeholder="nome do processo"
                    control={control}
                    value={process.name}
                    inputName="name"
                    index={index}
                    onChangeArray={handleChangeProcessInput}
                  />
                </InputGroup>
                <InputGroup>
                  <TextArea
                    name={`model.modelProcesses[${index}].description`}
                    label="Descrição"
                    placeholder="descrição do processo"
                    control={control}
                    value={process.description}
                    inputName="description"
                    index={index}
                    onChangeArray={handleChangeProcessInput}
                  />
                </InputGroup>

                <Collapse
                  title="Resultados esperados"
                  collapse={collapseProcesses}
                  setCollapse={setCollapseProcesses}
                  options={
                    <AddIcon onClick={() => handleAddExpectedResult(index)} />
                  }
                >
                  {model.modelProcesses[index].expectedResults.map(
                    (expectedResult, indexER) => {
                      return (
                        <Collapse
                          key={indexER}
                          title={
                            expectedResult.initial !== ''
                              ? expectedResult.initial
                              : 'Insira o sigla do resultado esperado*'
                          }
                          options={
                            <RemoveIcon
                              onClick={() =>
                                handleRemoveExpectedResult(index, indexER)
                              }
                            />
                          }
                        >
                          <InputGroup>
                            <Input
                              name={`model.modelProcesses[${index}].expectedResults[${indexER}].initial`}
                              label="Sigla"
                              placeholder="sigla do resultado esperado"
                              control={control}
                              value={expectedResult.initial}
                              inputName="initial"
                              index={indexER}
                              parentIndex={index}
                              onChangeArrayParent={
                                handleChangeExpectedResultInput
                              }
                            />
                          </InputGroup>
                          <InputGroup>
                            <TextArea
                              name={`model.modelProcesses[${index}].expectedResults[${indexER}].description`}
                              label="Descrição"
                              placeholder="descrição do resultado esperado"
                              control={control}
                              value={expectedResult.description}
                              inputName="description"
                              index={indexER}
                              parentIndex={index}
                              onChangeArrayParent={
                                handleChangeExpectedResultInput
                              }
                            />
                          </InputGroup>
                        </Collapse>
                      );
                    }
                  )}
                </Collapse>
              </Collapse>
            );
          })}
        </Collapse>
        <Options>
          <ButtonSeconday type="button">Cancelar</ButtonSeconday>
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
