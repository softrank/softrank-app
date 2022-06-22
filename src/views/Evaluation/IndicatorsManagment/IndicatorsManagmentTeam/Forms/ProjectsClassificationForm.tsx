import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ReadOnly } from 'shared/components';
import { InputGroup, Select } from 'shared/components/Form';
import { implementationDegreesData } from 'shared/data/implementationDegrees';
import { Project } from 'shared/models/project';

interface Props {
  project: Project;
  expectedResultId: string;
}

interface IForm {
  id?: string;
  projectId: string;
  expectedResultId: string;
  classification?: string;
}

export const ProjectsClassificationForm = ({
  project,
  expectedResultId,
}: Props) => {
  const { control, reset, watch } = useForm<IForm>();

  useEffect(() => {
    reset({
      id: undefined,
      projectId: project.id,
      expectedResultId: expectedResultId,
      classification: undefined,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, expectedResultId]);

  const watchClassification: any = watch('classification');

  useEffect(() => {
    if (watchClassification) console.log(watchClassification.value);
  }, [watchClassification]);

  return (
    <InputGroup>
      <ReadOnly label="Projeto" value={project.name} />
      <Select
        name="classification"
        label="Classificação"
        placeholder="selecione uma classificação"
        optionValues={implementationDegreesData}
        optionLabel="label"
        optionValue="value"
        control={control}
        rules={{ required: true }}
      />
    </InputGroup>
  );
};
