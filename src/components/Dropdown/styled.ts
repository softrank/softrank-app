import styled from 'styled-components';

export const StyledDropdown = styled.div`
  position: absolute;
  top: 1em;
  min-width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-shrink: 0;

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
