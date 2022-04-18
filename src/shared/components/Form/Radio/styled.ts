import styled from 'styled-components';

interface Props {
  color?: 'red' | 'yellow' | 'green';
}

export const HiddenRadio = styled.input.attrs({ type: 'radio' })<Props>`
  position: absolute;
  z-index: 10;
  opacity: 0;
  width: 1.4em;
  height: 1.4em;
`;

export const StyledRadio = styled.div<Props>`
  position: relative;
  width: 1.4em;
  height: 1.4em;

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

  ${HiddenRadio}:checked + & {
    background-color: var(--gray-100);
  }
`;

export const RadioLabel = styled.div`
  text-align: center;
  line-height: 0.4;
`;
