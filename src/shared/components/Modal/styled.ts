import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';

interface Props {
  width: string;
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

export const ModalWrapper = styled.div<Props>`
  position: relative;
  max-width: ${(props) => (props.width ? props.width : '800px')};
  height: 500px;
  padding: 1em;
  margin: 1em;

  position: relative;
  z-index: 10;

  background: #fff;
  color: #000;
  border-radius: var(--radius);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

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
  color: var(--purple-500);
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

  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--gray-700);

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
