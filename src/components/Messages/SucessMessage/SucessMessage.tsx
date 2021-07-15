import { Message } from '../Message';
import sucess from '../../../assets/images/success.svg';
import Button from '../../Buttons/Button';

interface Props {
  showMessage: boolean;
  setShowMessage: (state: boolean) => void;
  title: string;
  path: string;
}

export const SucessMessage = (props: Props) => {
  const { showMessage, setShowMessage, title, path } = props;

  return (
    <Message
      showMessage={showMessage}
      setShowMessage={setShowMessage}
      title={title}
      src={sucess}
    >
      <a href={path}>
        <Button>Okay</Button>
      </a>
    </Message>
  );
};
