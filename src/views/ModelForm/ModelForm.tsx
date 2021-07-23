import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useFieldArray, useForm } from 'react-hook-form';

import { ModelEntity } from '../../shared/models/modelEntity';
import Card, { CardTitle } from '../../shared/components/Card/Card';
import Wrapper from '../../shared/components/Layouts/Wrapper';
import Button from '../../shared/components/Buttons/Button';
import Form from '../../shared/components/Form/Form';
import TextArea from '../../shared/components/Form/TextArea/TextArea';
import {
  STab,
  STabList,
  STabPanel,
  STabs,
} from '../../shared/components/Tab/Tab';
import {
  ModalImage,
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
import { Modal } from '../../shared/components/Modal/Modal';
import approve from '../../shared/assets/images/approve.svg';
import { ErrorMessage } from '../../shared/components/Messages/ErrorMessage/ErrorMessage';
import { SuccessMessage } from '../../shared/components/Messages/SuccessMessage/SuccessMessage';
import { Select } from '../../shared/components/Form/Select/Select';
import { modelsService } from '../../shared/services/modelsService';
import { LoadingSpinner } from '../../shared/components/Loading/LoadingSpinner';
import { Collapse } from '../../shared/components/Collapse/Collapse';
import Input from '../../shared/components/Form/Input/Input';
import { ModelLevel } from '../../shared/models/modelLevel';

type FormValues = {
  id: string;
  name: string;
  year: Date;
  description: string;
  modelLevels: ModelLevel[];
};

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

export const ModelForm = () => {
  const { handleSubmit, control } = useForm<FormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'modelLevels',
  });

  const [models, setModels] = useState<ModelEntity[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    modelsService.list().then((response) => {
      setModels(response);
    });
    append({});
  }, [append]);

  const handleCreateOrEditModel = (data: any) => {
    const model: ModelEntity = {
      id: data.id,
      name: data.name.value,
      year: data.year,
      description: data.description,
      modelLevels: data.modelLevels,
    };

    setLoading(true);
    if (model.id) {
      modelsService
        .update(model)
        .then(() => {
          setModels([...models.filter((x) => x.id !== model.id), model]);
          handleSuccessMessage('Modelo atulizado!');
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
        })
        .catch((error) => {
          handleErrorMessage(error);
        });
    }
    return <Redirect to="/listarModelos" />;
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

  const handleAddToCollapse = () => {
    setCollapse(false);
    append({});
  };

  const onSubmit = handleSubmit((data) => handleCreateOrEditModel(data));

  return (
    <Wrapper>
      <Card>
        <CardTitle>Cadastrar modelo</CardTitle>
        <STabs>
          <STabList>
            <STab>Modelo</STab>
            <STab>Níveis</STab>
            <STab>Resultados esperados</STab>
          </STabList>
          <STabPanel>
            <Form onSubmit={onSubmit}>
              <InputGroup>
                <Select
                  name="name"
                  label="Modelo"
                  placeholder="selecione um modelo"
                  control={control}
                  optionValues={ModelOptions}
                  optionLabel="title"
                  optionValue="title"
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
                title="Níveis"
                collapse={collapse}
                setCollapse={setCollapse}
                options={<AddIcon onClick={() => handleAddToCollapse()} />}
              >
                {fields.map(({ id }, index) => {
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
                        <RemoveIcon onClick={() => remove(index)} />
                      </CollapseContent>
                      {index !== fields.length - 1 && <GroupDivider />}
                    </div>
                  );
                })}
              </Collapse>
              <Options>
                <ButtonSeconday type="button">Cancelar</ButtonSeconday>
                <Button type="button" onClick={() => setShowModal(true)}>
                  Salvar
                </Button>
              </Options>
              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title="Confirmar modelo"
                width="500px"
              >
                <>
                  {loading ? (
                    <LoadingSpinner loading={loading} size={100} />
                  ) : (
                    <ModalImage src={approve} alt="success" />
                  )}
                  <Options>
                    <ButtonSeconday
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar
                    </ButtonSeconday>
                    <Button type="button" onClick={() => onSubmit()}>
                      Confirmar
                    </Button>
                  </Options>
                </>
              </Modal>
            </Form>
          </STabPanel>
          <STabPanel>Panel 2</STabPanel>
          <STabPanel>Panel 3</STabPanel>
        </STabs>
      </Card>
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
    </Wrapper>
  );
};
