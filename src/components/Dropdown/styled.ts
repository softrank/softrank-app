import styled from 'styled-components';

interface Props {
  positionTop?: string;
  positionLeft?: string;
}

export const StyledDropdown = styled.div<Props>`
  position: absolute;
  top: ${(props) => (props.positionTop ? props.positionTop : '0')};
  left: ${(props) => (props.positionLeft ? props.positionLeft : '0')};
  min-width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: start;

  text-align: center;

  background-color: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--gray-100);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: auto;
  z-index: 100;
`;
