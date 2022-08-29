import styled from 'styled-components';

interface Props {
  positionTop?: string;
  positionLeft?: string;
}

export const DropdownBody = styled.div<Props>`
  position: absolute;
  top: ${(props) => (props.positionTop ? props.positionTop : '0')};
  left: ${(props) => (props.positionLeft ? props.positionLeft : '0')};
  min-width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: start;

  text-align: center;

  background-color: ${({ theme }) => theme.body};
  border-radius: var(--radius);
  border: 2px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: auto;
  z-index: 100;
`;

export const DropdownItem = styled.li`
  display: block;
  padding: 0.7em;
  margin: 0.2em;

  font-weight: bold;
  text-decoration: none;

  color: ${({ theme }) => theme.accent};
  list-style-type: none;

  &:hover {
    color: ${({ theme }) => theme.accent};
    background-color: ${({ theme }) => theme.accentBackground};
    border-radius: var(--radius);
  }
`;

export const DropdownDivider = styled.hr`
  height: 0.5px;
  width: 90%;
  margin: auto;

  border-style: none;
  background-color: ${({ theme }) => theme.border};
`;
