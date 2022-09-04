import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import { motion } from 'framer-motion';

interface Props {
  width: string;
  height: string;
}

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

export const ModalWrapper = styled(motion.div)<Props>`
  position: relative;
  min-width: ${({ width }) => (width ? width : '800px')};
  max-height: ${({ height }) => (height ? height : '90vh')};
  padding: 1em;
  margin: 1em;

  position: relative;
  z-index: 10;
  overflow-y: auto;

  max-height: 90vh;

  background: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  border-radius: var(--radius);
  box-shadow: ${({ theme }) => theme.boxShadow};
  /* 
  &::-webkit-scrollbar {
    display: none;
  } */

  /* #region Scrollbar  */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    margin: 40px;
    height: 40px;

    background: ${({ theme }) => theme.accentBackground};
    border-radius: var(--radius);
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.accent};
    border-radius: var(--radius);
  }
  /* #endregion Scrollbar  */

  @media (max-width: 420px) {
    width: 90%;
  }
`;

export const CloseModalButton = styled(IoIosClose)`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  z-index: 10;

  cursor: pointer;
  color: ${({ theme }) => theme.accent}; ;
`;

export const ModalBody = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTitle = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 34px;
  font-family: 'Montserrat', sans-serif;
  padding: 0 1em;
  margin-bottom: 0.5em;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.text};

  @media (max-width: 460px) {
    font-size: 28px;
    text-align: left;
    align-items: start;
    padding-left: 0;
  }
`;

export const ModalImage = styled.img`
  width: 70%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const ErrorImage = styled.img`
  width: 70%;

  @media (max-width: 420px) {
    width: 100%;
  }
`;
