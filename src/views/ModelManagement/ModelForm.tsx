import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

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
import { modelsService } from '../../shared/services/modelsService';
import { Collapse } from '../../shared/components/Collapse/Collapse';
import Input from '../../shared/components/Form/Input/Input';
import { ConfirmationMessage } from '../../shared/components/Messages/ConfirmationMessage/ConfirmationMessage';
import { Process } from '../../shared/models/process';
import { ExpectedResult } from '../../shared/models/expectedResult';
import { ExpectedResultsFieldArray } from './expectedResultsFieldArray';
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

  const { handleSubmit, control, reset } = useForm<ModelEntity>();

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

    console.log(data);

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
    levelsAppend({});
  };

  const handleRemoveLevel = (index: number) => {
    levelsRemove(index);
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

  const handleRemoveProcess = (index: number) => {
    processesRemove(index);
    model.modelProcesses.splice(index, 1);
  };

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

  const onSubmit = handleSubmit((data) => handleCreateOrEditModel(data));

  return (
    <>
      <Form onSubmit={onSubmit}>
        <InputGroup>
          <Input
            name="name"
            label="Modelo"
            placeholder="selecione um modelo"
            control={control}
          />
          <DateInput
            label="Ano"
            name="year"
            placeholder="selecione um ano"
            control={control}
            yearPicker
            dateFormat="yyyy"
          />
        </InputGroup>
        <InputGroup>
          <TextArea
            name="description"
            label="Descrição"
            placeholder="descrição do modelo"
            control={control}
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
                    />
                    <Input
                      name={`modelLevels[${index}].name`}
                      label="Nome"
                      placeholder="nome do nível"
                      control={control}
                    />
                  </LevelGroup>
                  <RemoveIcon onClick={() => handleRemoveLevel(index)} />
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
                  <RemoveIcon onClick={() => handleRemoveProcess(index)} />
                }
              >
                <InputGroup>
                  <Input
                    name={`modelProcesses[${index}].initial`}
                    label="Sigla"
                    placeholder="sigla do processo"
                    control={control}
                  />
                  <Input
                    name={`modelProcesses[${index}].name`}
                    label="Nome"
                    placeholder="nome do processo"
                    control={control}
                  />
                </InputGroup>
                <InputGroup>
                  <TextArea
                    name={`modelProcesses[${index}].description`}
                    label="Descrição"
                    placeholder="descrição do processo"
                    control={control}
                  />
                </InputGroup>
                <ExpectedResultsFieldArray
                  nestIndex={index}
                  control={control}
                  model={model}
                />
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
