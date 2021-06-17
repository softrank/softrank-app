import styled, { css } from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Header = styled.header`
  padding: 0.4em;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  align-items: center;
  background: var(--white);
  border-bottom: 1.4px solid var(--light-gray);
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 100%;
  min-width: 80vw;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  color: var(--accent);
  font-size: 1.6rem;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
`;

const iconCss = css`
  width: 1.6em;
  height: 1.6em;
  color: var(--accent);
  margin-right: 3em;
  cursor: pointer;
`;

export const MenuIcon = styled(FaBars)`
  ${iconCss}
`;
