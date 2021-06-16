import React from 'react';
import Input from '../../../components/Input/Input';
import { Form } from './styled';

export default function ModelForm() {
  return (
    <Form>
      <Input
        label="Nome"
        name="nome"
        placeholder="nome do modelo"
        type="text"
        required={true}
      />
      <Input label="Ano" name="ano" placeholder="ano do modelo" type="text" />
      <Input
        label="Descrição"
        name="descricao"
        placeholder="descrição do modelo"
        type="text"
      />
      <div>niveis</div>
    </Form>
  );
}
