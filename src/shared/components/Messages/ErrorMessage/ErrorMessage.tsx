import warning from 'shared/assets/images/warning.svg';
import { Button } from 'shared/components';
import { Message } from '..';

interface Props {
  showMessage: boolean;
  setShowMessage: (state: boolean) => void;
  errorMessage: string;
}

const ErrorMessage = (props: Props) => {
  const { showMessage, setShowMessage, errorMessage } = props;

  return (
    <Message
      showMessage={showMessage}
      setShowMessage={setShowMessage}
      title={errorMessage}
      src={warning}
    >
      <Button onClick={() => setShowMessage(false)}>Okay</Button>
    </Message>
  );
};

export default ErrorMessage;
