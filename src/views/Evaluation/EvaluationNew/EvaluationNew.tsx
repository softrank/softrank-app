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
import { ModelEntity } from 'shared/models/modelEntity';
import { ModelLevel } from 'shared/models/modelLevel';
import { modelsService } from 'shared/services';

export const EvaluationNew = () => {
  const [loading, setLoading] = useState(true);
  const [models, setModels] = useState<ModelEntity[]>([]);
  const [levels, setLevels] = useState<ModelLevel[]>([]);
  const [levelField, setLevelField] = useState(null);

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
  };

  const watchModel: any = watch('model');

  // const defaultValues = {
  //   expectedLevel: { value: undefined, label: '' },
  // };

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

  useEffect(() => {
    if (watchModel) {
      const selectedModel = models.filter(
        (model) => model.id === watchModel.value
      );
      const levelOptions = selectedModel[0].modelLevels;
      setLevels(levelOptions);
      reset({ ...getValues(), expectedLevel: { value: undefined, label: '' } });
      setLevelField(null);
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
                  placeholder="selecione um nível"
                  control={control}
                  rules={{ required: true }}
                  optionValues={levels}
                  optionLabel="initial"
                  errors={errors?.expectedLevel}
                  value={levelField}
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
