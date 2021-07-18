import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import agent from '../../shared/api/agent';
import { ModelEntity } from '../../shared/models/modelEntity';
import Card, { CardTitle } from '../../shared/components/Card/Card';
import Wrapper from '../../shared/components/Layouts/Wrapper';
import Button from '../../shared/components/Buttons/Button';
import Form from '../../shared/components/Form/Form';
import Input from '../../shared/components/Form/Input/Input';
import TextArea from '../../shared/components/Form/TextArea/TextArea';
import {
  STab,
  STabList,
  STabPanel,
  STabs,
} from '../../shared/components/Tab/Tab';
import { ModalImage, Row, RowResponsive } from './styled';
import { DateInput } from '../../shared/components/Form/DateInput/DateInput';
import { ButtonSeconday } from '../../shared/components/Buttons/ButtonSecondary';
import { Modal } from '../../shared/components/Modal/Modal';
import approve from '../../shared/assets/images/approve.svg';
import { ErrorMessage } from '../../shared/components/Messages/ErrorMessage/ErrorMessage';
import { SuccessMessage } from '../../shared/components/Messages/SuccessMessage/SuccessMessage';

type FormValues = {
  id: string;
  name: string;
  year: Date;
  description: string;
  model: string;
};

export const ModelForm = () => {
  const { handleSubmit, control } = useForm<FormValues>();

  const [models, setModels] = useState<ModelEntity[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    agent.Models.list().then((response) => {
      setModels(response);
    });
  }, []);

  const handleCreateOrEditModel = (model: ModelEntity) => {
    if (model.id) {
      agent.Models.update(model)
        .then(() => {
          setModels([...models.filter((x) => x.id !== model.id), model]);
          handleSuccessMessage('Modelo atulizado!');
        })
        .catch((error) => {
          handleErrorMessage(error);
        });
    } else {
      model.id = uuid();
      agent.Models.create(model)
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
    setShowModal(false);
    setError(error);
    setShowErrorMessage(true);
  };

  const handleSuccessMessage = (title: string) => {
    setShowModal(false);
    setSuccessMessage(title);
    setShowSuccessMessage(true);
  };

  const onSubmit = handleSubmit((data) => handleCreateOrEditModel(data));

  return (
    <Wrapper>
      <div style={{ width: '100%' }}></div>
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
              <RowResponsive>
                <Input
                  name="name"
                  label="Nome"
                  type="text"
                  placeholder="nome do modelo"
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
              </RowResponsive>
              <RowResponsive>
                <TextArea
                  name="description"
                  label="Descrição"
                  placeholder="descrição do modelo"
                  control={control}
                />
              </RowResponsive>
              <Row>
                <ButtonSeconday type="button">Cancelar</ButtonSeconday>
                <Button type="button" onClick={() => setShowModal(true)}>
                  Salvar
                </Button>
              </Row>
              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title="Confirmar modelo"
                width="500px"
              >
                <>
                  <ModalImage src={approve} alt="succes" />
                  <Row>
                    <ButtonSeconday
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar
                    </ButtonSeconday>
                    <Button type="submit">Confirmar</Button>
                  </Row>
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
