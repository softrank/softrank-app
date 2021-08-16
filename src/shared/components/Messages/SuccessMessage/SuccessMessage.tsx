import Message from '../Message';
import success from '../../../assets/images/success.svg';
import { Button } from '../..';

interface Props {
  showMessage: boolean;
  setShowMessage: (state: boolean) => void;
  title: string;
  path: string;
}

const SuccessMessage = (props: Props) => {
  const { showMessage, setShowMessage, title, path } = props;

  return (
    <Message
      showMessage={showMessage}
      setShowMessage={setShowMessage}
      title={title}
      src={success}
    >
      <a href={path}>
        <Button>Okay</Button>
      </a>
    </Message>
  );
};

export default SuccessMessage;
