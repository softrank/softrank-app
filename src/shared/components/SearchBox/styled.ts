import { IoIosSearch } from 'react-icons/io';
import styled, { css } from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0.6em;
  background: var(--white);

  display: flex;
  align-items: center;

  border-radius: var(--radius);
  border: 2px solid var(--gray-100);
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 1em;

  font-size: 18px;
  color: var(--gray-700);

  border: none;
  outline: none;

  &::placeholder {
    color: var(--gray-500);
  }
`;

const iconCss = css`
  width: 1.8rem;
  height: 1.8rem;
  padding: 0;
  margin: 0;

  display: inline;

  color: var(--gray-500);
  border-radius: 8px;
`;

export const SearchIcon = styled(IoIosSearch)`
  ${iconCss}
`;
