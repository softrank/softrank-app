import { useForm } from 'react-hook-form';

import { FlexSpace, ReadOnly, Options, Button, Modal } from 'shared/components';
import { Form, InputGroup, TextArea } from 'shared/components/Form';
import { Improvement } from 'shared/models/improvement';
import { improvementsService } from 'shared/services/improvementsService';

interface Props {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  improvement?: Improvement;
  evaluationState?: string;
  canEdit: boolean;
}

export const ImprovementView = ({
  showModal,
  setShowModal,
  improvement,
  evaluationState,
  canEdit,
}: Props) => {
  const { control, handleSubmit } = useForm<any>();

  const onSubmit = handleSubmit((data) => saveImprovement(data));

  const saveImprovement = (data: any) => {
    if (improvement?.id) {
      improvementsService.update(improvement?.id, data).then(() => {
        setShowModal(false);
      });
    }
  };

  return (
    <Modal
      title="Melhoria"
      showModal={showModal}
      setShowModal={setShowModal}
      width="90%"
      height="100%"
    >
      <div style={{ width: '100%' }}>
        {improvement && (
          <Form onSubmit={onSubmit}>
            <FlexSpace>
              <InputGroup>
                <ReadOnly
                  label="Resultado esperado"
                  value={improvement.expectedResult.initial}
                />
                <ReadOnly label="Tipo" value={improvement.type} />
              </InputGroup>
              <InputGroup>
                <ReadOnly label="Problema" value={improvement.problem} />
                <ReadOnly label="Sugestão" value={improvement.suggestion} />
              </InputGroup>
              {evaluationState === 'Avaliação final' && canEdit ? (
                <InputGroup>
                  <TextArea
                    label="Ajuste realizado"
                    name="resolution"
                    placeholder="Digite o ajuste realizado"
                    control={control}
                  />
                </InputGroup>
              ) : (
                <ReadOnly
                  label="Ajuste realizado"
                  value={improvement.resolution ?? '-'}
                />
              )}
              {evaluationState === 'Avaliação final' && canEdit && (
                <Options>
                  <Button secondary onClick={() => setShowModal(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar</Button>
                </Options>
              )}
            </FlexSpace>
          </Form>
        )}
      </div>
    </Modal>
  );
};
