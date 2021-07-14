import React, { useCallback, useEffect, useRef } from 'react';
import { CloseModalButton, ModalBackground, ModalWrapper } from './styled';

interface Props {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  children: JSX.Element;
}

export const Modal = (props: Props) => {
  const { showModal, setShowModal, children } = props;

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
          <ModalWrapper>
            {children}
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
