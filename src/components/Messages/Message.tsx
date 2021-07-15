import { Modal } from '../Modal/Modal';

interface Props {
  showMessage: boolean;
  setShowMessage: (state: boolean) => void;
  src: string;
  title: any;
  children?: JSX.Element;
}

export const Message = (props: Props) => {
  const { showMessage, setShowMessage, src, title, children } = props;

  return (
    <Modal
      title={title}
      showModal={showMessage}
      setShowModal={setShowMessage}
      src={src}
      width="500px"
    >
      {children}
    </Modal>
  );
};
