import { useCallback, useEffect, useRef } from 'react';
import { LoadingSpinner } from '../Loading/LoadingSpinner';
import {
  CloseModalButton,
  ModalBackground,
  ModalBody,
  ModalImage,
  ModalTitle,
  ModalWrapper,
} from './styled';

interface Props {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  title: string;
  children?: JSX.Element;
  width?: string;
  src?: string;
  loading?: boolean;
  imageAlt?: string;
}

export const Modal = (props: Props) => {
  const {
    showModal,
    setShowModal,
    title,
    children,
    width,
    src,
    loading,
    imageAlt,
  } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal && (
        <ModalBackground onClick={handleCloseModal} ref={modalRef}>
          <ModalWrapper
            width={width ?? '300px'}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <ModalBody>
              <ModalTitle>{title}</ModalTitle>
              {loading ? (
                <LoadingSpinner loading={loading} size={100} />
              ) : (
                src && <ModalImage src={src} alt={imageAlt ?? ''} />
              )}
              {children}
            </ModalBody>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal(false)}
            />
          </ModalWrapper>
        </ModalBackground>
      )}
    </>
  );
};
