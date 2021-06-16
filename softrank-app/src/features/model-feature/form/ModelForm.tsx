import React from 'react';
import Input from '../../../components/Input/Input';
import { Form } from './styled';

export default function ModelForm() {
  return (
    <Form>
      this is the model form
      <Form>inside div</Form>
      <Input placeholder="testing props" />
    </Form>
  );
}
