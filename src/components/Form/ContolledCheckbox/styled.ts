import styled, { css } from 'styled-components';

interface Props {
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<Props>`
  position: absolute;
  z-index: 10;
  opacity: 0;
  width: 1.2em;
  height: 1.2em;

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
    `}
`;

export const Icon = styled.svg<Props>`
  position: relative;
  top: -1px;

  fill: none;
  stroke: white;
  stroke-width: 2px;

  ${(props) =>
    props.disabled &&
    css`
      stroke: var(--gray-500);
    `}
`;

export const StyledCheckbox = styled.div<Props>`
  display: inline-block;
  width: 1.2em;
  height: 1.2em;

  background: ${(props) => (props.checked ? 'var(--dark-purple)' : '')};
  border: 2px solid var(--dark-purple);
  border-radius: 3px;
  transition: all 150ms;

  ${(props) =>
    props.disabled &&
    css`
      background: var(--gray-100);
      border: 2px solid var(--gray-500);
    `}

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px var(--light-purple);
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;
