import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, FlexSpace, Title, Wrapper } from 'shared/components';
import {
  DateInput,
  Form,
  Input,
  InputGroup,
  Select,
} from 'shared/components/Form';
import { LoadingScreen } from 'shared/components/Loading';
import { EvalutationDto } from 'shared/dtos/evaluationDto';
import { EvaluatorInstitution } from 'shared/models/evaluatorInstitution';
import { ModelEntity } from 'shared/models/modelEntity';
import { ModelLevel } from 'shared/models/modelLevel';
import { modelsService } from 'shared/services';
import { evaluatorInstitutionService } from 'shared/services/evaluatorInstitutionService';

export const EvaluationNew = () => {
  const [loading, setLoading] = useState(true);
  const [models, setModels] = useState<ModelEntity[]>([]);
  const [levels, setLevels] = useState<ModelLevel[]>([]);
  const [disableLevels, setDisableLevels] = useState(true);
  const [institutions, setInstitutions] = useState<EvaluatorInstitution[]>([]);

  const {
    handleSubmit,
    control,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm<any>();

  const handleCreateAuditor = (evaluation: EvalutationDto) => {
    console.log(evaluation);

    evaluation.organizationalUnitId = '7d11b246-87f2-4271-a6ec-d39d74954a5c';
  };

  const watchModel: any = watch('model');

  useEffect(() => {
    modelsService.list().then((response) => {
      setModels(response);
    });
    evaluatorInstitutionService.list().then((response) => {
      setInstitutions(response);
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    if (watchModel) {
      const selectedModel = models.filter(
        (model) => model.id === watchModel.value
      );
      const levelOptions = selectedModel[0].modelLevels;
      setLevels(levelOptions);
      setDisableLevels(false);
      reset({ ...getValues(), expectedLevel: undefined });
    }
  }, [watchModel, models, reset, getValues]);

  const onSubmit = handleSubmit((data) => handleCreateAuditor(data));
  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando..." />
      ) : (
        <Wrapper>
          <Title>Adicionar avaliação</Title>
          <Form onSubmit={onSubmit}>
            <FlexSpace>
              <InputGroup>
                <Input
                  name="name"
                  label="Nome"
                  placeholder="nome da avaliação"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  errors={errors?.name}
                />
              </InputGroup>
              <InputGroup>
                <DateInput
                  label="Data de início"
                  name="startDate"
                  placeholder="selecione um data de início"
                  dateFormat="dd/MM/yyyy"
                  control={control}
                  rules={{ required: true }}
                  errors={errors.startDate}
                />
                <DateInput
                  label="Data de fim"
                  name="endDate"
                  placeholder="selecione um data de fim"
                  dateFormat="dd/MM/yyyy"
                  control={control}
                  rules={{ required: true }}
                  errors={errors.endDate}
                />
              </InputGroup>
              <InputGroup>
                <Select
                  name="evaluatorInstitutionId"
                  label="Instituição avaliadora"
                  placeholder="selecione uma instituição"
                  control={control}
                  rules={{ required: true }}
                  optionValues={institutions}
                  optionLabel="name"
                  errors={errors?.evaluatorInstitutionId}
                />
                <Select
                  name="organizationalUnitId"
                  label="Unidade ornizacional"
                  placeholder="selecione uma organização"
                  control={control}
                  rules={{ required: true }}
                  optionValues={institutions}
                  optionLabel="name"
                  errors={errors?.organizationalUnitId}
                />
              </InputGroup>
              <InputGroup>
                <Select
                  name="model"
                  label="Modelo"
                  placeholder="selecione um modelo"
                  control={control}
                  rules={{ required: true }}
                  optionValues={models}
                  optionLabel="name"
                  errors={errors?.model}
                />
                <Select
                  name="expectedLevel"
                  label="Nível pretendido"
                  placeholder={
                    disableLevels
                      ? 'primeiro selecione um modelo'
                      : 'selecione um nível'
                  }
                  control={control}
                  rules={{ required: true }}
                  optionValues={levels}
                  optionLabel="initial"
                  errors={errors?.expectedLevel}
                  disabled={disableLevels}
                />
              </InputGroup>
              <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <Button type="submit" secondary>
                  Salvar
                </Button>
              </div>
            </FlexSpace>
          </Form>
        </Wrapper>
      )}
    </>
  );
};
