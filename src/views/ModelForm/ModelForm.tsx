import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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
import { ModalImage, Row, RowResponsive } from './styled';
import { DateInput } from '../../shared/components/Form/DateInput/DateInput';
import { ButtonSeconday } from '../../shared/components/Buttons/ButtonSecondary';
import { Modal } from '../../shared/components/Modal/Modal';
import approve from '../../shared/assets/images/approve.svg';
import { ErrorMessage } from '../../shared/components/Messages/ErrorMessage/ErrorMessage';
import { SuccessMessage } from '../../shared/components/Messages/SuccessMessage/SuccessMessage';
import { Select } from '../../shared/components/Form/Select/Select';
import { modelsService } from '../../shared/services/modelsService';
import { LoadingSpinner } from '../../shared/components/Loading/LoadingSpinner';

type FormValues = {
  id: string;
  name: string;
  year: Date;
  description: string;
  model: string;
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

  const [models, setModels] = useState<ModelEntity[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    modelsService.list().then((response) => {
      setModels(response);
    });
  }, []);

  const handleCreateOrEditModel = (model: ModelEntity) => {
    console.log('meu ovo');
    if (model.id) {
      setLoading(true);
      modelsService
        .update(model)
        .then(() => {
          setModels([...models.filter((x) => x.id !== model.id), model]);
          setLoading(false);
          handleSuccessMessage('Modelo atulizado!');
        })
        .catch((error) => {
          setLoading(false);
          handleErrorMessage(error);
        });
    } else {
      // model.id = uuid();
      setLoading(true);
      console.log('meu ovo');

      modelsService
        .create(model)
        .then(() => {
          setModels([...models, model]);
          setLoading(false);
          handleSuccessMessage('Modelo criado!');
        })
        .catch((error) => {
          setLoading(false);
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

  const logData = (data: any) => {
    console.log(data);
  };

  // const onSubmit = handleSubmit((data) => console.log(data));
  const onSubmit = handleSubmit((data) => setLoading(true));

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
                <Select
                  name="name"
                  label="Modelo"
                  placeholder="selecione um modelo"
                  control={control}
                  optionValues={ModelOptions}
                  optionLabel="title"
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
                  {loading ? (
                    <LoadingSpinner loading={loading} size={100} />
                  ) : (
                    <ModalImage src={approve} alt="succes" />
                  )}
                  <Row>
                    <ButtonSeconday
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar
                    </ButtonSeconday>
                    <Button type="button" onClick={() => onSubmit()}>
                      Confirmar
                    </Button>
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
