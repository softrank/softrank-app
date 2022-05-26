import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form, Radio, RadioGroup } from 'shared/components/Form';
import { EvaluationProcess } from 'shared/models/evaluationProcess';

interface Props {
  process: EvaluationProcess;
  index: number;
  indicatorId: string;
}

export const InitalEvaluationTeamForm = (props: Props) => {
  const { process, index } = props;

  const { handleSubmit, register, watch } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  const watchRadios = watch(`${process.initial}.indicator[${index}]`);

  useEffect(() => {
    if (watchRadios) console.log(watchRadios);
  }, [watchRadios]);

  return (
    <Form onSubmit={onSubmit}>
      <RadioGroup label="Status">
        <Radio
          name={`${process.initial}.indicator[${index}]`}
          value="invalid"
          color="red"
          legend="Inválido"
          register={register}
        />
        <Radio
          name={`${process.initial}.indicator[${index}]`}
          value="incomplete"
          color="yellow"
          legend="Incompleto"
          register={register}
        />
        <Radio
          name={`${process.initial}.indicator[${index}]`}
          value="complete"
          color="green"
          legend="Completo"
          register={register}
        />
        <Radio
          name={`${process.initial}.indicator[${index}]`}
          value="n/a"
          legend="N/A"
          register={register}
        />
      </RadioGroup>
    </Form>
  );
};
