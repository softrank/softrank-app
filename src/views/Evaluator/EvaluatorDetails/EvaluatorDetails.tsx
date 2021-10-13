import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import { Button, FlexSpace, Title, Wrapper } from 'shared/components';
import { Form, Input, InputGroup } from 'shared/components/Form';
import { Evaluator } from 'shared/models/evaluator';
import { evaluatorService } from 'shared/services';
import { Options } from './styled';

export const EvaluatorDetails = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<Evaluator>();
  const history = useHistory();

  const handleCreateEvaluator = (evaluator: Evaluator) => {
    evaluator.documentType = 'CPF';

    evaluatorService
      .create(evaluator)
      .then(() => {
        console.log('criado');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRedirect = () => history.push('/');

  const onSubmit = handleSubmit((data) => handleCreateEvaluator(data));

  useEffect(() => {
    register('name', { required: true });
    register('email', {
      required: true,
      pattern: {
        value: /[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
        message: 'Email inválido',
      },
    });
    register('password', { required: true });
    register('documentNumber', {
      required: true,
      pattern: {
        value: /^\d{3}.\d{3}.\d{3}-\d{2}/g,
        message: 'Número de CPF inválido.',
      },
    });
    register('phone', {
      required: true,
      pattern: {
        value: /\(\d{2}\)\s\d{4,5}-\d{4}/g,
        message: 'Número de celular inválido.',
      },
    });
  }, [register]);

  return (
    <Wrapper>
      <Title>Cadastrar avaliador</Title>
      <Form onSubmit={onSubmit}>
        <FlexSpace space="10px">
          <InputGroup>
            <Input
              name="name"
              label="Nome"
              placeholder="nome do avaliador"
              control={control}
              errors={errors?.name}
            />
            <Input
              name="documentNumber"
              label="Documento"
              placeholder="CPF do avaliador"
              control={control}
              errors={errors?.documentNumber}
              mask="999.999.999-99"
            />
          </InputGroup>
          <InputGroup>
            <Input
              name="email"
              label="Email"
              placeholder="email do avaliador"
              type="email"
              control={control}
              errors={errors?.email}
            />
            <Input
              name="password"
              label="Senha"
              placeholder="senha do avaliador"
              control={control}
              errors={errors?.password}
            />
          </InputGroup>
          <InputGroup>
            <Input
              name="phone"
              label="Celular"
              placeholder="celular do avaliador"
              control={control}
              errors={errors?.phone}
              mask="(99) 99999-9999"
            />
          </InputGroup>
          <Options>
            <Button secondary type="button" onClick={() => handleRedirect()}>
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </Options>
        </FlexSpace>
      </Form>
    </Wrapper>
  );
};
