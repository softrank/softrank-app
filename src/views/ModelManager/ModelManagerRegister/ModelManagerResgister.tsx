import { useForm } from 'react-hook-form';

import { Title, Button, FlexSpace, Wrapper } from 'shared/components';
import { Form, InputGroup, Input } from 'shared/components/Form';
import { ModelManager } from 'shared/Types/modelManager';

export const ModelManagerRegister = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ModelManager>();

  const handleCreateEvaluator = (manager: ModelManager) => {
    manager.documentType = 'f';
  };

  const onSubmit = handleSubmit((data) => handleCreateEvaluator(data));

  return (
    <Wrapper>
      <Title>Cadastro gestor do modelo</Title>
      <Form onSubmit={onSubmit}>
        <FlexSpace>
          <InputGroup>
            <Input
              name="name"
              label="Nome"
              placeholder="nome do gestor"
              control={control}
              rules={{ required: true }}
              errors={errors?.name}
            />
            <Input
              name="email"
              label="Email"
              placeholder="email do gestor"
              type="email"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
                  message: 'Email inválido.',
                },
              }}
              errors={errors?.email}
            />
          </InputGroup>
          <InputGroup>
            <Input
              name="documentNumber"
              label="Documento"
              placeholder="CPF do gestor"
              mask="999.999.999-99"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^\d{3}.\d{3}.\d{3}-\d{2}/g,
                  message: 'Número de CPF inválido.',
                },
              }}
              errors={errors?.documentNumber}
            />
            <Input
              name="phone"
              label="Celular"
              placeholder="celular do gestor"
              mask="(99) 99999-9999"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /\(\d{2}\)\s\d{4,5}-\d{4}/g,
                  message: 'Número de celular inválido.',
                },
              }}
              errors={errors?.phone}
            />
          </InputGroup>
          <Button type="submit" width="100%">
            Cadastrar-se
          </Button>
        </FlexSpace>
      </Form>
    </Wrapper>
  );
};
