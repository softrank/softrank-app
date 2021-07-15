import { useCallback, useEffect, useRef } from 'react';
import {
  CloseModalButton,
  ModalBackground,
  ModalBody,
  ModalTitle,
  ModalWrapper,
} from './styled';

interface Props {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  title: string;
  children?: JSX.Element;
  width?: string;
}

export const Modal = (props: Props) => {
  const { showModal, setShowModal, title, children, width } = props;

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
        console.log('I pressed');
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
          <ModalWrapper width={width ?? ''}>
            <ModalBody>
              <ModalTitle>{title}</ModalTitle>
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
