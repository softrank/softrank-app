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
  interviews: any[];
}

export const InterviewUpload = ({
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

  const savePlan = (files: IForm) => {
    const interviews: File[] = Array.from(files.interviews);
    interviews.forEach((interview) =>
      evaluationService.uploadInterview(evaluationId, interview)
    );
    setShowModal(false);
    loadEvaluation(evaluationId);
  };

  return (
    <div style={{ width: '100%' }}>
      <Form onSubmit={onSubmit}>
        <FlexSpace space="2rem">
          <InputGroup>
            <FileInput
              label=""
              name="interviews"
              control={control}
              rules={{ required: true }}
              errors={errors?.interviews}
              reset={reset}
              getValues={getValues}
              multiple
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
