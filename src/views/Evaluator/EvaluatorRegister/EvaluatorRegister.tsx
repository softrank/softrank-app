import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import Wrapper from 'shared/components/Layouts/Wrapper';
import { AddIcon, Button, Collapse, Title } from 'shared/components';
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
  const [evaluator] = useState(new Evaluator());

  const {
    handleSubmit,
    control,
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

  const licenseTypes = [
    { value: '1', label: 'Líder' },
    { value: '2', label: 'Adjunto' },
  ];

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

  const onSubmit = handleSubmit((data) => handleCreateEvaluator(data));

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
                  placeholder="senha do avaliador"
                  control={control}
                  rules={{ required: true }}
                  errors={errors?.password}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  name="name"
                  label="Nome"
                  placeholder="nome do avaliador"
                  control={control}
                  rules={{ required: true }}
                  errors={errors?.name}
                />
                <Input
                  name="documentNumber"
                  label="Documento"
                  placeholder="CPF do avaliador"
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
                  placeholder="celular do avaliador"
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
                              dateFormat="dd/MM/yyyy"
                              control={control}
                              rules={{ required: true }}
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
                          </InputGroup>
                          <InputGroup>
                            <Select
                              name={`licenses[${index}].modelLevelId`}
                              label="Modelo"
                              placeholder="selecione um modelo"
                              optionValues={models}
                              optionLabel="name"
                              control={control}
                              rules={{ required: true }}
                              errors={errors?.licenses?.[index]?.modelLevelId}
                            />
                            <Select
                              name={`licenses[${index}].type`}
                              label="Tipo"
                              placeholder="selecione um tipo de licença"
                              optionValues={licenseTypes}
                              optionLabel="label"
                              control={control}
                              rules={{ required: true }}
                              errors={errors?.licenses?.[index]?.type}
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
              <Button type="submit" width="100%">
                Confirmar
              </Button>
            </FlexSpace>
          </Form>
        </Wrapper>
      )}
    </>
  );
};
