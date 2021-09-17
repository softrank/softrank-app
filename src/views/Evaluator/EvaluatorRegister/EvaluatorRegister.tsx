import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import Wrapper from 'shared/components/Layouts/Wrapper';
import { AddIcon, Collapse, Title } from 'shared/components';
import {
  Form,
  InputGroup,
  Input,
  Select,
  DateInput,
} from 'shared/components/Form';
import { Evaluator } from 'shared/models/evaluator';
import { evaluatorService, modelsService } from 'shared/services';
import {
  CollapseContent,
  GroupDivider,
} from 'shared/components/Collapse/styled';
import { ModelEntity } from 'shared/models/modelEntity';
import { LoadingScreen } from 'shared/components/Loading';
import FlexSpace from 'shared/components/Layouts/FlexSpace';
import { RemoveIcon } from 'views/Model/ModelDetails/styled';

export const EvaluatorRegister = () => {
  const [models, setModels] = useState<ModelEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [evaluator, setEvaluator] = useState(new Evaluator());

  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm<Evaluator>();
  const {
    fields: licenses,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'licenses',
  });

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
    register('email', { required: true });
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

  useEffect(() => {
    reset({
      licenses: evaluator.licenses,
    });
  }, [evaluator, reset]);

  useEffect(() => {
    modelsService
      .list()
      .then((response) => {
        setModels(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando..." />
      ) : (
        <Wrapper>
          <Title>Cadastro avaliador</Title>
          <Form onSubmit={onSubmit}>
            <FlexSpace space="16px">
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
                  name="phone"
                  label="Celular"
                  placeholder="celular do avaliador"
                  control={control}
                  errors={errors?.phone}
                  mask="(99) 99999-9999"
                />
              </InputGroup>
              <Collapse
                underline
                title="Licenças"
                options={<AddIcon onClick={() => append({})} />}
              >
                {licenses.map(({ id }, index) => {
                  return (
                    <React.Fragment key={id}>
                      <CollapseContent>
                        <div style={{ width: '100%' }}>
                          <InputGroup>
                            <DateInput
                              label="Validade"
                              name={`licenses[${index}].expiration`}
                              placeholder="selecione uma data"
                              control={control}
                              rules={{ required: true }}
                              dateFormat="dd/MM/yyyy"
                              errors={errors?.licenses?.[index]?.expiration}
                            />
                            <Input
                              name={`licenses[${index}].number`}
                              label="Número"
                              placeholder="número da licença"
                              control={control}
                              rules={{ required: true }}
                              errors={errors?.licenses?.[index]?.number}
                            />
                            <Select
                              name={`licenses[${index}].modelLevelId`}
                              label="Modelo"
                              placeholder="selecione um modelo"
                              control={control}
                              rules={{ required: true }}
                              optionValues={models}
                              optionLabel="name"
                            />
                          </InputGroup>
                        </div>
                        <RemoveIcon onClick={() => remove(index)} />
                      </CollapseContent>
                      {index !== licenses.length - 1 && <GroupDivider />}
                    </React.Fragment>
                  );
                })}
              </Collapse>
            </FlexSpace>
          </Form>
        </Wrapper>
      )}
    </>
  );
};
