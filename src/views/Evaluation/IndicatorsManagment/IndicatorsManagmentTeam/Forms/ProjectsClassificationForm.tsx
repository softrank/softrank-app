import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ReadOnly } from 'shared/components';
import { Form, InputGroup, Radio, RadioGroup } from 'shared/components/Form';
import { Project } from 'shared/models/project';
import { evaluationIndicatorService } from 'shared/services/evaluationIndicatorService';

interface Props {
  project: Project;
  expectedResultId: string;
  status: string | undefined;
}

interface IForm {
  id?: string;
  projectId: string;
  expectedResultId: string;
  projectStatus?: string;
}

export const ProjectsClassificationForm = ({
  project,
  expectedResultId,
  status,
}: Props) => {
  const { register, reset, watch, handleSubmit } = useForm<IForm>();
  const [previousStatus, setPreviousStatus] = useState(status);

  const watchStatus: any = watch('projectStatus');

  const saveStatus = (status: string | undefined) => {
    if (status)
      evaluationIndicatorService.postErProject(expectedResultId, {
        evaluationProjectId: project.id,
        status: status,
      });
  };

  useEffect(() => {
    reset({
      id: undefined,
      projectId: project.id,
      expectedResultId: expectedResultId,
      projectStatus: undefined,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, expectedResultId, status]);

  useEffect(() => {
    if (watchStatus !== previousStatus && watchStatus !== undefined) {
      setPreviousStatus(watchStatus);
      saveStatus(watchStatus);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchStatus]);

  useEffect(() => reset({ projectStatus: status }), [status, reset]);

  const onSubmit = handleSubmit((data) => saveStatus(data.projectStatus));

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup>
        <ReadOnly label="Projeto" value={project.name} />
        <RadioGroup label="Status">
          <Radio
            name="projectStatus"
            value="T"
            color="green"
            legend="T"
            register={register}
          />
          <Radio
            name="projectStatus"
            value="L"
            color="blue"
            legend="L"
            register={register}
          />
          <Radio
            name="projectStatus"
            value="P"
            color="yellow"
            legend="P"
            register={register}
          />
          <Radio
            name="projectStatus"
            value="N"
            color="red"
            legend="N"
            register={register}
          />
          <Radio
            name="projectStatus"
            value="NA"
            legend="N/A"
            register={register}
          />
          <Radio
            name="projectStatus"
            value="F"
            legend="F"
            register={register}
          />
        </RadioGroup>
      </InputGroup>
    </Form>
  );
};
