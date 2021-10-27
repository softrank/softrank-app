import { useForm } from 'react-hook-form';

import { Title, Button, Wrapper, FlexSpace } from 'shared/components';
import { Form, InputGroup, Input } from 'shared/components/Form';
import { Auditor } from 'shared/models/auditor';

export const AuditorRegister = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Auditor>();

  const handleCreateAuditor = (auditor: Auditor) => {
    auditor.documentType = 'CPF';

    console.log(auditor);
  };

  const onSubmit = handleSubmit((data) => handleCreateAuditor(data));

  return (
    <Wrapper>
      <Title>Cadastro auditor</Title>
      <Form onSubmit={onSubmit}>
        <FlexSpace>
          <InputGroup>
            <Input
              name="email"
              label="Email"
              placeholder="email do auditor"
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
            <Input
              name="password"
              label="Senha"
              placeholder="senha do auditor"
              control={control}
              rules={{ required: true }}
              errors={errors?.password}
            />
          </InputGroup>
          <InputGroup>
            <Input
              name="name"
              label="Nome"
              placeholder="nome do auditor"
              control={control}
              rules={{ required: true }}
              errors={errors?.name}
            />
            <Input
              name="documentNumber"
              label="Documento"
              placeholder="CPF do auditor"
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
          </InputGroup>
          <InputGroup>
            <Input
              name="phone"
              label="Celular"
              placeholder="celular do auditor"
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
            Confirmar
          </Button>
        </FlexSpace>
      </Form>
    </Wrapper>
  );
};
