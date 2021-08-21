import { Props } from 'react';
import { IoIosAdd, IoIosArrowDown } from 'react-icons/io';
import styled, { css } from 'styled-components';

const iconCss = css`
  width: 2.6rem;
  height: 2.6rem;
  padding: 0;
  margin: 0;

  display: inline;

  color: var(--gray-500);
  background: var(--gray-50);
  border-radius: 8px;
  box-sizing: border-box;

  cursor: pointer;
  transition: all 0.5s;

  &:active,
  &:hover {
    color: var(--dark-purple);
    background: #eceeff;
  }
`;

const ToggleIcon = styled(IoIosArrowDown)`
  ${iconCss}
`;

const AddIcon = styled(IoIosAdd)`
  ${iconCss}
`;

export { ToggleIcon, AddIcon };
