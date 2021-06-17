import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ModelEntity } from '../../../app/models/modelEntity';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import Input from '../../../components/Form/Input/Input';
import Label from '../../../components/Form/Label/Label';
import { FormTitle } from './styled';
import { v4 as uuid } from 'uuid';
import agent from '../../../app/api/agent';
import Wrapper from '../../../app/layouts/Layout/Wrapper';
import Container from '../../../app/layouts/Layout/Container';

type FormValues = {
  id: string;
  name: string;
  year: Date;
  description: string;
};

export default function ModelForm() {
  const { register, handleSubmit } = useForm<FormValues>();

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
  };

  const onSubmit = handleSubmit((data) => handleCreateOrEditModel(data));

  return (
    <Container>
      <Wrapper>
        <Card>
          <FormTitle>Cadastrar modelo</FormTitle>
          <form onSubmit={onSubmit}>
            <Label>Nome</Label>
            <Input
              {...register('name')}
              placeholder="nome do modelo"
              type="text"
            />
            <Label>Ano</Label>
            <Input
              {...register('year')}
              placeholder="ano do modelo"
              type="date"
            />
            <Label>Descrição</Label>
            <Input
              {...register('description')}
              placeholder="descrição do modelo"
            />
            <Button type="submit">Salvar</Button>
          </form>
        </Card>
      </Wrapper>
    </Container>
  );
}
