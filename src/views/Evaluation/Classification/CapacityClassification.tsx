import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ReadOnly } from 'shared/components';
import { InputGroup, Radio, RadioGroup } from 'shared/components/Form';
import { evaluationIndicatorService } from 'shared/services/evaluationIndicatorService';

interface Props {
  capacityId: string;
  status: string | undefined;
}

interface IForm {
  id?: string;
  capacityId: string;
  status?: string;
}

export const CapacityClassification = ({ capacityId, status }: Props) => {
  const [previousStatus, setPreviousStatus] = useState(status);

  const { register, watch, reset } = useForm<IForm>();

  const watchClassification: any = watch('status');

  const saveStatus = (status: string) => {
    evaluationIndicatorService.updateCp(capacityId, {
      status: status,
    });
  };

  useEffect(() => {
    reset({ status: status });
  }, [status, reset]);

  useEffect(() => {
    if (
      watchClassification !== previousStatus &&
      watchClassification !== undefined
    ) {
      setPreviousStatus(watchClassification);
      saveStatus(watchClassification);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchClassification]);

  return (
    <InputGroup>
      <ReadOnly label="Final" value="Classificação final" />
      <RadioGroup label="Status">
        <Radio
          name="status"
          value="T"
          color="green"
          legend="T"
          register={register}
        />
        <Radio
          name="status"
          value="L"
          color="blue"
          legend="L"
          register={register}
        />
        <Radio
          name="status"
          value="P"
          color="yellow"
          legend="P"
          register={register}
        />
        <Radio
          name="status"
          value="N"
          color="red"
          legend="N"
          register={register}
        />
        <Radio name="status" value="NA" legend="N/A" register={register} />
        <Radio name="status" value="F" legend="F" register={register} />
      </RadioGroup>
    </InputGroup>
  );
};
