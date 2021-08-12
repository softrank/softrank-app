import warning from '../../../assets/images/warning.svg';
import Button from '../../Buttons/Button';
import Message from '../Message';

interface Props {
  showMessage: boolean;
  setShowMessage: (state: boolean) => void;
  error: any;
}

const ErrorMessage = (props: Props) => {
  const { showMessage, setShowMessage, error } = props;

  return (
    <Message
      showMessage={showMessage}
      setShowMessage={setShowMessage}
      title={error.message}
      src={warning}
    >
      <Button onClick={() => setShowMessage(false)}>Okay</Button>
    </Message>
  );
};

export default ErrorMessage;
