import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  float: left;
  width: 16vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-shrink: 0;

  text-align: center;

  background-color: var(--white);
  border-right: 1px solid var(--gray-100);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const SideBarItem = styled.li`
  display: block;
  padding: 0.7em;
  margin: 0.2em;

  font-weight: bold;
  text-decoration: none;

  color: var(--dark-purple);
  list-style-type: none;

  &:hover {
    color: var(--dark-purple);
    background-color: var(--light-purple);
    border-radius: var(--radius);
  }
`;

export const SideBarDivided = styled.hr`
  height: 0.5px;
  width: 90%;
  margin: auto;

  border-style: none;
  background-color: var(--gray-100);
`;
