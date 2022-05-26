import { useForm } from 'react-hook-form';

import { FlexSpace, Button, Options } from 'shared/components';
import { Form, InputGroup, FileInput } from 'shared/components/Form';
import { evaluationService } from 'shared/services';

interface Props {
  setShowModal: (state: boolean) => void;
  evaluationId: string;
  loadEvaluation: (id: string) => void;
}

interface IForm {
  plan: File;
}

export const EvaluationPlanUpload = ({
  setShowModal,
  evaluationId,
  loadEvaluation,
}: Props) => {
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = handleSubmit((data) => savePlan(data));

  const savePlan = (data: IForm) => {
    const file = data.plan;
    evaluationService.uploadPlan(evaluationId, file).then(() => {
      setShowModal(false);
      loadEvaluation(evaluationId);
    });
  };

  return (
    <div style={{ width: '100%' }}>
      <Form onSubmit={onSubmit}>
        <FlexSpace space="2rem">
          <InputGroup>
            <FileInput
              label=""
              name="plan"
              control={control}
              rules={{ required: true }}
              errors={errors?.plan}
              reset={reset}
              getValues={getValues}
            />
          </InputGroup>
          <Options>
            <Button secondary type="button" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </Options>
        </FlexSpace>
      </Form>
    </div>
  );
};
