import styled, { css } from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Header = styled.header`
  height: 7vh;
  display: grid;
  grid-template-columns: [column1] 29% [column2] 42% [column3] 29%;
  align-items: center;
  justify-content: center;

  padding: 0.4em;

  background: var(--white);
  border-bottom: 1.4px solid var(--gray-100);
`;

export const HeaderColumn1 = styled.div`
  grid-column: column1;
`;
export const HeaderColumn2 = styled.div`
  grid-column: column2;
  display: flex;
  justify-content: center;
`;
export const HeaderColumn3 = styled.div`
  grid-column: column3;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderTitle = styled.a`
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 700;

  color: var(--dark-purple);
`;

export const IconBackground = styled.div`
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.3s;

  &:active {
    background: var(--light-purple);
    border-radius: 100%;
  }
`;

const iconCss = css`
  width: 1.4em;
  height: 1.4em;

  color: var(--dark-purple);

  cursor: pointer;
`;

export const MenuIcon = styled(FaBars)`
  ${iconCss}
  float: left;
`;
