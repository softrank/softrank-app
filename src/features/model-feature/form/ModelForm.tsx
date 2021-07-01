import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { ModelEntity } from '../../../app/models/modelEntity';
import { FormTitle, Row } from './styled';
import agent from '../../../app/api/agent';
import Card from '../../../components/Card/Card';
import Wrapper from '../../../app/layouts/Layout/Wrapper';
import Button from '../../../components/Button/Button';
import Form from '../../../components/Form/Form';
import Input from '../../../components/Form/Input/Input';
import TextArea from '../../../components/Form/TextArea/TextArea';
import { STab, STabList, STabPanel, STabs } from '../../../components/Tab/Tab';

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

  useEffect(() => {
    agent.Models.list().then((response) => {
      setModels(response);
    });
  }, []);

  const handleCreateOrEditModel = (model: ModelEntity) => {
    if (model.id) {
      agent.Models.update(model).then(() => {
        setModels([...models.filter((x) => x.id !== model.id), model]);
      });
    } else {
      model.id = uuid();
      agent.Models.create(model).then(() => {
        setModels([...models, model]);
      });
    }
    return <Redirect to="/listarModelos" />;
  };

  const onSubmit = handleSubmit((data) => handleCreateOrEditModel(data));

  return (
    <Wrapper>
      <div style={{ width: '100%' }}>
        <FormTitle>Cadastrar modelo</FormTitle>
      </div>
      <Card>
        <STabs>
          <STabList>
            <STab>Modelo</STab>
            <STab>Níveis</STab>
            <STab>Resultados esperados</STab>
          </STabList>
          <STabPanel>
            <Form onSubmit={onSubmit}>
              <Row>
                <Input
                  name="name"
                  label="Nome"
                  type="text"
                  placeholder="nome do modelo"
                  control={control}
                />
                <Input
                  name="year"
                  label="Ano"
                  type="date"
                  placeholder="ano do modelo"
                  control={control}
                />
              </Row>
              <Row>
                <TextArea
                  name="description"
                  label="Descrição"
                  placeholder="descrição do modelo"
                  control={control}
                />
              </Row>
              <Row>
                <Button type="button" secondary>
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </Row>
            </Form>
          </STabPanel>
          <STabPanel>Panel 2</STabPanel>
          <STabPanel>Panel 3</STabPanel>
        </STabs>
      </Card>
    </Wrapper>
  );
};
