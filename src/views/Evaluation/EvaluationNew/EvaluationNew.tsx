import React from 'react';
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import {
  AddIcon,
  Button,
  Collapse,
  FlexSpace,
  Title,
  Wrapper,
} from 'shared/components';
import {
  CollapseContent,
  GroupDivider,
} from 'shared/components/Collapse/styled';
import {
  DateInput,
  Form,
  Input,
  InputGroup,
  Select,
} from 'shared/components/Form';
import { LoadingScreen } from 'shared/components/Loading';
import { EvalutationDto } from 'shared/dtos/evaluationDto';
import { Auditor } from 'shared/models/auditor';
import { Evaluator } from 'shared/models/evaluator';
import { EvaluatorInstitution } from 'shared/models/evaluatorInstitution';
import { ModelEntity } from 'shared/models/modelEntity';
import { ModelLevel } from 'shared/models/modelLevel';
import { Organization } from 'shared/models/organization';
import {
  auditorService,
  evaluationService,
  evaluatorInstitutionService,
  evaluatorService,
  modelsService,
  organizationalUnitService,
} from 'shared/services';
import { RemoveIcon } from 'views/Model/ModelDetails/styled';
import { EvaluationForm } from './evaluationForm';

export const EvaluationNew = () => {
  const [loading, setLoading] = useState(true);
  const [models, setModels] = useState<ModelEntity[]>([]);
  const [levels, setLevels] = useState<ModelLevel[]>([]);
  const [institutions, setInstitutions] = useState<EvaluatorInstitution[]>([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [auditors, setAuditors] = useState<Auditor[]>([]);
  const [evaluatorsOptions, setEvaluatorsOptions] = useState<Evaluator[]>([]);
  const [disableLevels, setDisableLevels] = useState(true);
  const [disableEvaluators, setDisableEvaluators] = useState(true);
  const [disableAddEvaluators, setDisableAddEvaluators] = useState(false);
  const [disableAddProjects, setDisableAddProjects] = useState(false);

  const {
    handleSubmit,
    control,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm<EvaluationForm>();

  const {
    fields: evaluators,
    append: evaluatorsAppend,
    remove: evaluatorsRemove,
  } = useFieldArray({
    control,
    name: 'evaluatorsIds',
  });

  const {
    fields: projects,
    append: projectsAppend,
    remove: projectsRemove,
  } = useFieldArray({
    control,
    name: 'projects',
  });

  const navigate = useNavigate();
  const watchModel: any = watch('model');
  const watchInstitution: any = watch('evaluatorInstitutionId');

  const assembleEvaluation = (formData: EvaluationForm) => {
    const formatedEvaluators = formData.evaluatorsIds.map((evaluator) => {
      return (evaluator.evaluatorId = (evaluator.evaluatorId as any).value);
    });

    const formatedProjects = formData.projects.map((project) => {
      return project.name;
    });

    const evalutationDto: EvalutationDto = {
      name: formData.name,
      start: formData.start,
      end: formData.end,
      evaluatorInstitutionId: (formData.evaluatorInstitutionId = (
        formData.evaluatorInstitutionId as any
      ).value),
      organizationalUnitId: (formData.organizationalUnitId = (
        formData.organizationalUnitId as any
      ).value),
      expectedModelLevelId: (formData.expectedModelLevelId = (
        formData.expectedModelLevelId as any
      ).value),
      implementationInstitution: formData.implementationInstitution,
      auditorId: (formData.auditorId = (formData.auditorId as any).value),
      evaluatorsIds: formatedEvaluators,
      projects: formatedProjects,
    };

    return evalutationDto;
  };

  const handleCreateAuditor = (formData: EvaluationForm) => {
    const evaluation = assembleEvaluation(formData);
    evaluationService.create(evaluation).then(() => navigate(''));
  };

  useEffect(() => {
    modelsService.list().then((response) => setModels(response));
    evaluatorInstitutionService
      .list()
      .then((response) => setInstitutions(response));
    organizationalUnitService
      .list()
      .then((response) => setOrganizations(response));
    auditorService.list().then((response) => setAuditors(response));
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
      reset({
        ...getValues(),
        expectedModelLevelId: { value: null, label: null },
      });
    }
  }, [watchModel, models, reset, getValues]);

  useEffect(() => {
    if (watchInstitution) {
      setDisableEvaluators(false);
      const institutionId = watchInstitution.value;
      evaluatorService.list(institutionId).then((response) => {
        setEvaluatorsOptions(response);
      });
      reset({ ...getValues(), evaluatorsIds: [] });
      evaluatorsAppend({});
    }
  }, [watchInstitution, reset, getValues, evaluatorsAppend]);

  useEffect(() => {
    if (evaluators.length === 3) {
      setDisableAddEvaluators(true);
    } else {
      setDisableAddEvaluators(false);
    }
  }, [evaluators, evaluatorsRemove]);

  useEffect(() => {
    if (projects.length === 4) {
      setDisableAddProjects(true);
    } else {
      setDisableAddProjects(false);
    }
  }, [projects, projectsRemove]);

  useEffect(() => {
    evaluatorsAppend({});
    projectsAppend({});
  }, [evaluatorsAppend, projectsAppend]);

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
                <Input
                  name="implementationInstitution"
                  label="Instituição implementadora"
                  placeholder="nome da instituição"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  errors={errors?.implementationInstitution}
                />
                <Select
                  name="auditorId"
                  label="Auditor"
                  placeholder="selecione um auditor"
                  control={control}
                  rules={{ required: true }}
                  optionValues={auditors}
                  optionLabel="name"
                  errors={errors?.auditorId}
                />
              </InputGroup>
              <InputGroup>
                <DateInput
                  label="Data de início"
                  name="start"
                  placeholder="selecione uma data de início"
                  dateFormat="dd/MM/yyyy"
                  control={control}
                  rules={{ required: true }}
                  errors={errors?.start}
                />
                <DateInput
                  label="Data de fim"
                  name="end"
                  placeholder="selecione uma data de fim"
                  dateFormat="dd/MM/yyyy"
                  control={control}
                  rules={{ required: true }}
                  errors={errors?.end}
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
                  label="Unidade organizacional"
                  placeholder="selecione uma organização"
                  control={control}
                  rules={{ required: true }}
                  optionValues={organizations}
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
                  name="expectedModelLevelId"
                  label="Nível"
                  placeholder={
                    disableLevels
                      ? 'primeiro selecione um modelo'
                      : 'selecione um nível'
                  }
                  control={control}
                  rules={{ required: true }}
                  optionValues={levels}
                  optionLabel="initial"
                  errors={errors?.expectedModelLevelId}
                  disabled={disableLevels}
                />
              </InputGroup>
              <Collapse
                underline
                title="Avaliadores adjuntos"
                options={
                  <AddIcon
                    $disable={disableAddEvaluators}
                    onClick={() => evaluatorsAppend({})}
                  />
                }
              >
                {evaluators.map(({ id }, index) => {
                  return (
                    <React.Fragment key={id}>
                      <CollapseContent>
                        <InputGroup>
                          <Select
                            name={`evaluatorsIds[${index}].evaluatorId`}
                            label="Avaliador"
                            placeholder={
                              disableEvaluators
                                ? 'primeiro selecione uma instituição'
                                : 'selecione um avaliador'
                            }
                            control={control}
                            rules={{ required: true }}
                            optionValues={evaluatorsOptions}
                            optionLabel="name"
                            disabled={disableEvaluators}
                            errors={errors?.evaluatorsIds?.[index]?.evaluatorId}
                          />
                          <RemoveIcon onClick={() => evaluatorsRemove(index)} />
                        </InputGroup>
                      </CollapseContent>
                      {index !== evaluators.length - 1 && <GroupDivider />}
                    </React.Fragment>
                  );
                })}
              </Collapse>
              <Collapse
                underline
                title="Projetos"
                options={
                  <AddIcon
                    $disable={disableAddProjects}
                    onClick={() => projectsAppend({})}
                  />
                }
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
                          <RemoveIcon onClick={() => projectsRemove(index)} />
                        </InputGroup>
                      </CollapseContent>
                      {index !== projects.length - 1 && <GroupDivider />}
                    </React.Fragment>
                  );
                })}
              </Collapse>
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
