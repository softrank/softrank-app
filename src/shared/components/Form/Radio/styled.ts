import { BsCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

interface Props {
  color?: string;
}

export const HiddenRadio = styled.input.attrs({ type: 'radio' })<Props>`
  position: absolute;
  z-index: 10;
  opacity: 0;
  width: 1.2em;
  height: 1.2em;
`;

export const StyledRadio = styled.div<Props>`
  width: 1.2em;
  height: 1.2em;
  position: relative;

  border: 2px solid var(--purple-500);
  border-radius: 100%;
  transition: all 150ms;

  ${HiddenRadio}:checked + & {
    background: var(--purple-300);
    border: 2px solid var(--purple-500);
  }

  ${HiddenRadio}:hover, ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 3px var(--purple-300);
  }
`;

export const RadioLabel = styled.div`
  text-align: center;
  line-height: 0.4;
`;
