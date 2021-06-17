import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  background-color: var(--white);
  width: 16vw;
  height: 100vh;
  display: flex;
  justify-content: start;
  flex-direction: column;
  text-align: center;
  float: left;
  border-right: 1px solid var(--light-gray);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const SideBarItem = styled.li`
  list-style-type: none;
  font-weight: bold;
  color: var(--accent);
  padding: 0.7em;
  margin: 0.2em;
  text-decoration: none;
  border-bottom: 1px solid var(--light-gray);

  &:hover {
    color: var(--white);
    background-color: var(--accent);
    border-radius: 4px;
  }

  &:last-child {
    border: none;
  }
`;
