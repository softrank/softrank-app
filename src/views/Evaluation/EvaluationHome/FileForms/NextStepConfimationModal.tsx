import { Button, FlexSpace, Options } from 'shared/components';
import approve from 'shared/assets/images/approve.svg';
import { ImageContainer, StepDetails } from './styled';
import { evaluationService } from 'shared/services';

interface Props {
  nextStepModal: (state: boolean) => void;
  evaluationId: string;
  loadEvaluation: (id: string) => void;
  setShowModal: (state: boolean) => void;
}

export const NextStepConfimationModal = ({
  nextStepModal,
  evaluationId,
  loadEvaluation,
  setShowModal,
}: Props) => {
  const handleNextStep = () => {
    evaluationService.nextStep(evaluationId).then(() => {
      setShowModal(false);
      loadEvaluation(evaluationId);
    });
  };

  return (
    <FlexSpace>
      <StepDetails>
        Você tem certeza que deseja avançar para a avaliação final? Esta ação
        não é reversível.
      </StepDetails>
      <ImageContainer>
        <img style={{ width: '60%' }} src={approve} alt="aprovar" />
      </ImageContainer>
      <Options>
        <Button secondary type="button" onClick={() => nextStepModal(false)}>
          Cancelar
        </Button>
        <Button type="button" onClick={() => handleNextStep()}>
          Encerrar
        </Button>
      </Options>
    </FlexSpace>
  );
};
