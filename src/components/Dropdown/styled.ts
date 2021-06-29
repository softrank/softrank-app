import styled from 'styled-components';

interface Props {
  display: boolean;
}

export const StyledDropdown = styled.div<Props>`
  width: 12em;
  position: absolute;
  top: -20px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-shrink: 0;

  text-align: center;

  background-color: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--gray-100);
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */

  > li {
    display: ${(props) => (props.display ? 'block' : 'none')};
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;
