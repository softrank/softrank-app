import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import {
  Title,
  Collapse,
  Button,
  FlexSpace,
  Wrapper,
  AddIcon,
} from 'shared/components';
import {
  Form,
  InputGroup,
  Input,
  Select,
  DateInput,
} from 'shared/components/Form';
import {
  evaluatorInstitutionService,
  evaluatorService,
  modelsService,
} from 'shared/services';
import {
  CollapseContent,
  GroupDivider,
} from 'shared/components/Collapse/styled';
import { ModelEntity } from 'shared/models/modelEntity';
import { LoadingScreen } from 'shared/components/Loading';
import { EvaluatorInstitution } from 'shared/models/evaluatorInstitution';
import { RemoveIconButton } from './styled';
import { EvaluatorDto, LicenseDto } from 'shared/dtos/evaluatorDto';
import { EvaluatorFormValues } from './evaluatorFormValues';
import { useNavigate } from 'react-router';

export const EvaluatorRegister = () => {
  const [models, setModels] = useState<ModelEntity[]>([]);
  const [levels, setLevels] = useState<any[]>([]);
  const [evaluatorInstitutions, setEvaluatorInstitutions] = useState<
    EvaluatorInstitution[]
  >([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<EvaluatorFormValues>();
  const {
    fields: licenses,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'licenses',
  });

  const licenseTypes = [
    { value: 'leader', label: 'Líder' },
    { value: 'adjunct', label: 'Adjunto' },
  ];

  const assembleEvaluator = (evalutorData: EvaluatorFormValues) => {
    const formatedLicenses = evalutorData.licenses.map((license) => {
      const licenseDto: LicenseDto = {
        expiration: license.expiration,
        modelLevelId: (license.modelLevelId = (
          license.modelLevelId as any
        ).value),
        type: (license.type = (license.type as any).value),
      };

      return licenseDto;
    });

    const dto: EvaluatorDto = {
      name: evalutorData.name,
      email: evalutorData.email,
      documentNumber: evalutorData.documentNumber,
      documentType: 'f',
      phone: evalutorData.phone,
      password: evalutorData.password,
      evaluatorInstitutionId: (evalutorData.evaluatorInstitutionId = (
        evalutorData.evaluatorInstitutionId as any
      ).value),
      licenses: formatedLicenses,
    };

    return dto;
  };

  const handleCreateEvaluator = (formData: EvaluatorFormValues) => {
    const evaluator = assembleEvaluator(formData);

    evaluatorService.create(evaluator).then(() => {
      navigate('avaliacoes');
    });
  };

  const onSubmit = handleSubmit((data) => handleCreateEvaluator(data));

  useEffect(() => {
    modelsService.list().then((models) => {
      setModels(models);
    });
    evaluatorInstitutionService.list().then((instituitions) => {
      setEvaluatorInstitutions(instituitions);
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    const subscription = watch((data) => {
      const licenses = data.licenses;
      const tempLevels = new Array(licenses.length ? licenses.length - 1 : 0);

      licenses.forEach((license: any, index: number) => {
        if (license.model) {
          const copyModels = models;
          const filteredModels = copyModels.filter(
            (model) => model.id === license.model.value
          );
          const modelLevels = filteredModels[0].modelLevels;
          tempLevels.splice(index, 0, modelLevels);
        }
        setLevels(tempLevels);
      });
    });

    return () => subscription.unsubscribe();
  }, [watch, models]);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando..." />
      ) : (
        <Wrapper>
          <Title>Cadastro avaliador</Title>
          <Form onSubmit={onSubmit}>
            <FlexSpace>
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
                      value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i,
                      message: 'Email inválido.',
                    },
                  }}
                  errors={errors?.email}
                />
                <Input
                  name="password"
                  label="Senha"
                  placeholder="senha do avaliador"
                  type="password"
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
                <Select
                  name="evaluatorInstitutionId"
                  label="Instituição"
                  placeholder="selecione uma instituição"
                  optionValues={evaluatorInstitutions}
                  optionLabel="name"
                  control={control}
                  rules={{ required: true }}
                  errors={errors?.evaluatorInstitutionId}
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
                          <FlexSpace>
                            <InputGroup>
                              <Select
                                name={`licenses[${index}].model`}
                                label="Modelo"
                                placeholder="selecione um modelo"
                                optionValues={models}
                                optionLabel="name"
                                control={control}
                                rules={{ required: true }}
                                errors={errors?.licenses?.[index]?.model}
                              />
                              <Select
                                name={`licenses[${index}].modelLevelId`}
                                label="Nível pretendido"
                                placeholder={
                                  false
                                    ? 'primeiro selecione um modelo'
                                    : 'selecione um nível'
                                }
                                control={control}
                                rules={{ required: true }}
                                optionValues={levels[index] ?? []}
                                optionLabel="initial"
                                errors={errors?.licenses?.[index]?.modelLevelId}
                                disabled={false}
                              />
                            </InputGroup>
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
                              <Select
                                name={`licenses[${index}].type`}
                                label="Tipo"
                                placeholder="selecione um tipo de licença"
                                optionValues={licenseTypes}
                                optionLabel="label"
                                optionValue="value"
                                control={control}
                                rules={{ required: true }}
                                errors={errors?.licenses?.[index]?.type}
                              />
                            </InputGroup>
                            <RemoveIconButton onClick={() => remove(index)} />
                          </FlexSpace>
                        </div>
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
