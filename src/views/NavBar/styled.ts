import styled, { css } from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Header = styled.header`
  display: grid;
  grid-template-columns: [column1] 28% [column2] 42% [column3] 28%;
  align-items: center;
  justify-content: center;

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
  font-size: 24px;
  font-weight: 700;
  padding: 0.4em;

  color: var(--purple-500);

  @media (max-width: 640px) {
    font-size: 25px;
  }
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
    background: var(--purple-300);
    border-radius: 100%;
  }
`;

const iconCss = css`
  width: 1.4em;
  height: 1.4em;

  color: var(--purple-500);

  cursor: pointer;
`;

export const MenuIcon = styled(FaBars)`
  ${iconCss}
  float: left;
`;
