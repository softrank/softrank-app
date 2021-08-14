import styled from 'styled-components';

import approve from '../../../assets/images/approve.svg';
import { ButtonSeconday } from '../../Buttons/ButtonSecondary';
import Button from '../../Buttons/Button';
import Message from '../Message';

const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.2em;
`;

interface Props {
  title: string;
  showMessage: boolean;
  loading: boolean;
  setShowMessage: (state: boolean) => void;
  cancelAction: () => void;
  confirmAction: () => void;
}

const ConfirmationMessage = ({
  title,
  showMessage,
  setShowMessage,
  loading,
  cancelAction,
  confirmAction,
}: Props) => {
  return (
    <Message
      title={title}
      showMessage={showMessage}
      setShowMessage={setShowMessage}
      src={approve}
      imageAlt="confirmar"
      loading={loading}
    >
      <Options>
        <ButtonSeconday type="button" onClick={cancelAction}>
          Cancelar
        </ButtonSeconday>
        <Button type="button" onClick={confirmAction}>
          Confirmar
        </Button>
      </Options>
    </Message>
  );
};

export default ConfirmationMessage;
