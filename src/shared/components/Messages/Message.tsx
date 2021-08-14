import { Modal } from '../Modal/Modal';

interface Props {
  showMessage: boolean;
  setShowMessage: (state: boolean) => void;
  src: string;
  title: any;
  children?: JSX.Element;
  imageAlt?: string;
  loading?: boolean;
}

const Message = ({
  showMessage,
  setShowMessage,
  src,
  title,
  children,
  imageAlt,
  loading,
}: Props) => {
  return (
    <Modal
      title={title}
      showModal={showMessage}
      setShowModal={setShowMessage}
      src={src}
      width="500px"
      imageAlt={imageAlt}
      loading={loading}
    >
      {children}
    </Modal>
  );
};

export default Message;
