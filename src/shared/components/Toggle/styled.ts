import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: var(--gray-400);
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms ease all;
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 100%;
    top: 50%;
    left: 2px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  &:checked + ${Switch} {
    background: var(--green);

    &:before {
      transform: translate(30px, -50%);
    }
  }
`;
