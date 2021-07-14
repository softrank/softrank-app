import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(60, 56, 158, 0.05);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  padding: 1.4em;
  margin: 2em;

  position: relative;
  z-index: 10;

  background: #fff;
  color: #000;
  border-radius: var(--radius);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
  color: var(--dark-purple);
`;
