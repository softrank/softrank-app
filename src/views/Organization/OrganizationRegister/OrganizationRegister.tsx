import { useForm } from 'react-hook-form';

import { Title, Button, Wrapper, FlexSpace } from 'shared/components';
import { Form, InputGroup, Input } from 'shared/components/Form';
import { Organization } from 'shared/models/organization';

export const OrganizationRegister = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Organization>();

  const handleCreateOrganization = (organization: Organization) => {
    organization.documentType = 'CNPJ';

    console.log(organization);
  };

  const onSubmit = handleSubmit((data) => handleCreateOrganization(data));
  return (
    <Wrapper>
      <Title>Cadastro organização</Title>
      <Form onSubmit={onSubmit}>
        <FlexSpace>
          <InputGroup>
            <Input
              name="email"
              label="Email"
              placeholder="email da organização"
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
              placeholder="senha da organização"
              control={control}
              rules={{ required: true }}
              errors={errors?.password}
            />
          </InputGroup>
          <InputGroup>
            <Input
              name="name"
              label="Nome"
              placeholder="nome da organização"
              control={control}
              rules={{ required: true }}
              errors={errors?.name}
            />
            <Input
              name="documentNumber"
              label="Documento"
              placeholder="CNPJ da organização"
              mask="99.999.999/9999-99"
              // type="number"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/g,
                  message: 'Número de CNPJ inválido.',
                },
              }}
              errors={errors?.documentNumber}
            />
          </InputGroup>
          <InputGroup>
            <Input
              name="phone"
              label="Telefone"
              placeholder="telefone da organização"
              mask="(99) 99999-9999"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /\(\d{2}\)\s\d{4,5}-\d{4}/g,
                  message: 'Número de telefone inválido.',
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
