import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ReadOnly } from 'shared/components';
import { InputGroup, Select } from 'shared/components/Form';
import { implementationDegreesData } from 'shared/data/implementationDegrees';

interface Props {
  expectedResultId: string;
}

interface IForm {
  id?: string;
  expectedResultId: string;
  classification?: string;
}

export const ExpectedResultClassificationForm = ({
  expectedResultId,
}: Props) => {
  const { control, watch } = useForm<IForm>();

  const watchClassification: any = watch('classification');

  useEffect(() => {
    if (watchClassification)
      console.log(`${watchClassification.value}, ${expectedResultId}`);
  }, [watchClassification, expectedResultId]);

  return (
    <InputGroup>
      <ReadOnly label="Final" value="Classificação final" />
      <Select
        name="classification"
        label="Classificação"
        placeholder="selecione uma instituição"
        optionValues={implementationDegreesData}
        optionLabel="label"
        optionValue="value"
        control={control}
        rules={{ required: true }}
      />
    </InputGroup>
  );
};
