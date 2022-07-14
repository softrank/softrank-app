import { BsFillCircleFill } from 'react-icons/bs';
import styled, { css } from 'styled-components';

interface Props {
  color: string;
}

export const RadioContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 0.3em;
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  z-index: 10;
  opacity: 0;
  width: 100%;
  height: 100%;
`;

export const StyledRadio = styled.div<Props>`
  position: relative;
  width: 1.4em;
  height: 1.4em;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 150ms;
  border-radius: 100%;
  border: ${(props) => `3px solid ${props.color}`};

  > svg {
    display: none;
  }

  ${HiddenRadio}:checked + & {
    > svg {
      display: inline;
    }
  }
`;

export const RadioLabel = styled.div`
  text-align: center;
  line-height: 0.4;

  color: var(--gray-700);
`;

const iconCss = css<Props>`
  width: 12px;
  height: 12px;

  color: ${(props) => props.color};
`;

export const CheckedCircle = styled(BsFillCircleFill)`
  ${iconCss}
`;
