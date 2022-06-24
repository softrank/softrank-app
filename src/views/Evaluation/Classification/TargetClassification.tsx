import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ReadOnly } from 'shared/components';
import { Form, InputGroup, Radio, RadioGroup } from 'shared/components/Form';
import { evaluationIndicatorService } from 'shared/services/evaluationIndicatorService';

interface Props {
  targetId: string;
  targetName: string;
  capacityId: string;
  status: string | undefined;
  label: 'Projeto' | 'Processo';
}

interface IForm {
  id?: string;
  targetId: string;
  capacityId: string;
  targetStatus?: string;
}

export const TargetClassification = ({
  targetId,
  targetName,
  capacityId,
  status,
  label,
}: Props) => {
  const { register, reset, watch, handleSubmit } = useForm<IForm>();
  const [previousStatus, setPreviousStatus] = useState(status);

  const watchStatus: any = watch('targetStatus');

  const saveStatus = (status: string | undefined) => {
    if (status) {
      evaluationIndicatorService.postCpToTarget(capacityId, {
        targetId: targetId,
        status: status,
      });
    }
  };

  useEffect(() => {
    reset({
      id: undefined,
      targetId: targetId,
      capacityId: capacityId,
      targetStatus: undefined,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetId, capacityId, status]);

  useEffect(() => {
    if (watchStatus !== previousStatus && watchStatus !== undefined) {
      setPreviousStatus(watchStatus);
      saveStatus(watchStatus);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchStatus]);

  useEffect(() => {
    reset({ targetStatus: status });
  }, [status, reset]);

  const onSubmit = handleSubmit((data) => saveStatus(data.targetStatus));

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup>
        <ReadOnly label={label} value={targetName} />
        <RadioGroup label="Status">
          <Radio
            name="targetStatus"
            value="T"
            color="green"
            legend="T"
            register={register}
          />
          <Radio
            name="targetStatus"
            value="L"
            color="blue"
            legend="L"
            register={register}
          />
          <Radio
            name="targetStatus"
            value="P"
            color="yellow"
            legend="P"
            register={register}
          />
          <Radio
            name="targetStatus"
            value="N"
            color="red"
            legend="N"
            register={register}
          />
          <Radio
            name="targetStatus"
            value="NA"
            legend="N/A"
            register={register}
          />
          <Radio name="targetStatus" value="F" legend="F" register={register} />
        </RadioGroup>
      </InputGroup>
    </Form>
  );
};
