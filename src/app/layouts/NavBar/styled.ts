import styled, { css } from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.4em;

  background: var(--white);
  border-bottom: 1.4px solid var(--gray-100);
`;

export const Wrapper = styled.div`
  height: 100%;
  min-width: 80vw;

  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  display: inline-block;
  vertical-align: middle;

  font-size: 1.6rem;
  line-height: normal;

  color: var(--dark-purple);
`;

const iconCss = css`
  width: 1.6em;
  height: 1.6em;
  margin-right: 3em;

  color: var(--dark-purple);

  cursor: pointer;
`;

export const MenuIcon = styled(FaBars)`
  ${iconCss}
`;
