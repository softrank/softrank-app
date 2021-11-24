import React, { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import {
  Title,
  Button,
  Wrapper,
  FlexSpace,
  AddIcon,
  Collapse,
} from 'shared/components';
import {
  CollapseContent,
  GroupDivider,
} from 'shared/components/Collapse/styled';
import { Form, InputGroup, Input } from 'shared/components/Form';
import { OrganizationDto } from 'shared/dtos/organizationalUnit';
import { RemoveIcon } from 'views/Model/ModelDetails/styled';

export const OrganizationRegister = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OrganizationDto>();

  const {
    fields: projects,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'projects',
  });

  const handleCreateOrganization = (organization: OrganizationDto) => {
    organization.documentType = 'j';

    console.log(organization);
  };

  useEffect(() => {
    append({});
  }, [append]);

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
          <Collapse
            underline
            title="Projetos"
            options={<AddIcon onClick={() => append({})} />}
          >
            {projects.map(({ id }, index) => {
              return (
                <React.Fragment key={index}>
                  <CollapseContent>
                    <InputGroup>
                      <Input
                        name={`projects[${index}].name`}
                        label="Nome"
                        placeholder="nome do projeto"
                        control={control}
                        rules={{ required: true }}
                        errors={errors?.projects?.[index]?.name}
                      />
                      <RemoveIcon onClick={() => remove(index)} />
                    </InputGroup>
                  </CollapseContent>
                  {index !== projects.length - 1 && <GroupDivider />}
                </React.Fragment>
              );
            })}
          </Collapse>
          <Button type="submit" width="100%">
            Confirmar
          </Button>
        </FlexSpace>
      </Form>
    </Wrapper>
  );
};
