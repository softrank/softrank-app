import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form, Radio, RadioGroup } from 'shared/components/Form';
import { EvidenceSourceStatusDto } from 'shared/dtos/evidenceSourceStatusDto';
import { evidenceSourcesService } from 'shared/services/evidenceSourceService';

interface Props {
  evidenceId: string;
  status: string;
  disabled: boolean;
}

interface IForm {
  status: string;
}

export const EvidenceStatusForm = ({ evidenceId, status, disabled }: Props) => {
  const [previousStatus, setPreviousStatus] = useState(status);

  const { handleSubmit, register, watch, reset } = useForm<IForm>();
  const watchRadios = watch('status');

  const onSubmit = handleSubmit((data) => updateStatus(data));

  const updateStatus = (data: IForm) => {
    const evidenceStatusDto: EvidenceSourceStatusDto = { status: data.status };
    evidenceSourcesService.updateStatus(evidenceId, evidenceStatusDto);
  };

  useEffect(() => {
    reset({ status: status });
  }, [status, reset]);

  useEffect(() => {
    if (watchRadios !== previousStatus && watchRadios !== undefined) {
      setPreviousStatus(watchRadios);
      onSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchRadios]);

  return (
    <Form onSubmit={onSubmit}>
      <RadioGroup label="Status" disabled={disabled}>
        <Radio
          name="status"
          value="invalid"
          color="red"
          legend="Inválido"
          register={register}
          disabled={disabled}
        />
        <Radio
          name="status"
          value="incomplete"
          color="yellow"
          legend="Incompleto"
          register={register}
          disabled={disabled}
        />
        <Radio
          name="status"
          value="complete"
          color="green"
          legend="Completo"
          register={register}
          disabled={disabled}
        />
        <Radio
          name="status"
          value="n/a"
          legend="N/A"
          register={register}
          disabled={disabled}
        />
      </RadioGroup>
    </Form>
  );
};
