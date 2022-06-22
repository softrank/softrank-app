import { Button, FlexSpace, Modal, Options } from 'shared/components';
import deleteImage from 'shared/assets/images/deleteImage.svg';
import { DeleteSvg, SvgContainer } from './styled';

interface Props {
  showConfirmation: boolean;
  setShowConfirmation: (state: boolean) => void;
  confirmAction: () => void;
}

export const DeleteConfirmationMessage = ({
  showConfirmation,
  setShowConfirmation,
  confirmAction,
}: Props) => {
  return (
    <Modal
      showModal={showConfirmation}
      setShowModal={setShowConfirmation}
      title="Deseja deletar o indicador?"
    >
      <FlexSpace>
        <SvgContainer style={{ width: '100%' }}>
          <DeleteSvg src={deleteImage} alt="delete" />
        </SvgContainer>
        <Options>
          <Button secondary onClick={() => setShowConfirmation(false)}>
            cancelar
          </Button>
          <Button onClick={() => confirmAction()}>deletar</Button>
        </Options>
      </FlexSpace>
    </Modal>
  );
};
