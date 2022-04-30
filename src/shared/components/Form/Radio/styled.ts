import { BsFillCircleFill } from 'react-icons/bs';
import styled, { css } from 'styled-components';

interface Props {
  color?: 'red' | 'yellow' | 'green';
}
interface IconProps {
  color: string;
}

export const RadioContainer = styled.div`
  width: 100%;
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
  border: ${(props) =>
    props.color === 'green'
      ? '3px solid #52b788'
      : props.color === 'red'
      ? '3px solid #f7a399'
      : props.color === 'yellow'
      ? '3px solid #ffd500'
      : '3px solid var(--gray-500)'};

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

const iconCss = css<IconProps>`
  width: 12px;
  height: 12px;

  color: ${(props) => props.color};
`;

export const CheckedCircle = styled(BsFillCircleFill)`
  ${iconCss}
`;
