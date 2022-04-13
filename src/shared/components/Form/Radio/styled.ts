import styled, { css } from 'styled-components';

interface Props {
  color?: 'red' | 'yellow' | 'green';
}

export const HiddenRadio = styled.input.attrs({ type: 'radio' })<Props>`
  position: absolute;
  z-index: 10;
  opacity: 0;
  width: 1.2em;
  height: 1.2em;
`;

export const StyledRadio = styled.div<Props>`
  position: relative;
  width: 1.2em;
  height: 1.2em;

  transition: all 150ms;
  border-radius: 100%;
  border: ${(props) =>
    props.color === 'green'
      ? '2px solid green'
      : props.color === 'red'
      ? '2px solid red'
      : props.color === 'yellow'
      ? '2px solid yellow'
      : '2px solid var(--purple-500)'};

  ${HiddenRadio}:checked + & {
    background: var(--purple-400);
    border: 2px solid var(--purple-300);
  }
`;

export const RadioLabel = styled.div`
  text-align: center;
  line-height: 0.4;
`;
