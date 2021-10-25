import { useForm } from 'react-hook-form';

import { Title, Button, Wrapper, FlexSpace } from 'shared/components';
import { Form, InputGroup, Input } from 'shared/components/Form';
import { SubTitle } from 'shared/components/Titles/SubTitle';
import { EvaluatorInstitutionDto } from 'shared/dtos/evaluatorInstitutionDto';
import { evaluatorInstitutionService } from 'shared/services/evaluatorInstitutionService';

export const EvaluatorInstitutionRegister = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EvaluatorInstitutionDto>();

  const handleCreateInstitution = (institution: EvaluatorInstitutionDto) => {
    institution.documentType = 'j';

    evaluatorInstitutionService.create(institution);

    console.log(institution);
  };

  const onSubmit = handleSubmit((data) => handleCreateInstitution(data));
  return (
    <Wrapper>
      <Title>Instituição avaliadora</Title>
      <Form onSubmit={onSubmit}>
        <FlexSpace space="16px">
          <InputGroup>
            <Input
              name="name"
              label="Nome"
              placeholder="nome da instituição"
              control={control}
              rules={{ required: true }}
              errors={errors?.name}
            />
            <Input
              name="email"
              label="Email"
              placeholder="email da instituição"
              type="email"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
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
              placeholder="CNPJ da instituição"
              mask="99.999.999/9999-99"
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
            <Input
              name="phone"
              label="Telefone"
              placeholder="telefone da instituição"
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
          <SubTitle>Endereço</SubTitle>
          <InputGroup>
            <Input
              name="address.zipcode"
              label="CEP"
              placeholder="insira o CEP"
              mask="99999-999"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^\d{5}-\d{3}/g,
                  message: 'Número de CEP inválido.',
                },
              }}
              errors={errors?.address?.zipcode}
            />
            <Input
              name="address.addressLine"
              label="Rua"
              placeholder="insira a rua"
              control={control}
              rules={{
                required: true,
              }}
              errors={errors?.address?.addressLine}
            />
          </InputGroup>
          <InputGroup>
            <Input
              name="address.number"
              label="Número"
              placeholder="insira o número"
              control={control}
              type="number"
              rules={{ required: true }}
              errors={errors?.address?.number}
            />
            <Input
              name="address.observation"
              label="Observação"
              placeholder="insira a observação"
              control={control}
              errors={errors?.address?.observation}
            />
          </InputGroup>
          <InputGroup>
            <Input
              name="address.city"
              label="Cidade"
              placeholder="insira a cidade"
              control={control}
              rules={{ required: true }}
              errors={errors?.address?.city}
            />
            <Input
              name="address.state"
              label="Estado"
              placeholder="insira o estado"
              control={control}
              rules={{ required: true }}
              errors={errors?.address?.state}
            />
          </InputGroup>
          <Button type="submit" width="100%" secondary>
            Confirmar
          </Button>
        </FlexSpace>
      </Form>
    </Wrapper>
  );
};
