import styled from 'styled-components';
import { HiOutlineTrash } from 'react-icons/hi';

export const RemoveIconButton = styled(HiOutlineTrash)`
  width: 100%;
  height: 2.4em;
  padding: 0.2em;

  border: 2px solid var(--gray-100);
  border-radius: 10px;

  background: var(--gray-50);
  color: var(--gray-500);
  cursor: pointer;
  outline: none;

  transition: all 600ms ease;

  &:hover {
    box-shadow: 0 8px 16px 0 rgb(39 17 45 / 10%);
    background-color: white;
    border: 2px solid var(--purple-500);
    color: var(--purple-500);
    transform: translateY(-3px);
  }

  &:active {
    background-color: var(--purple-300);
    border: 2px solid var(--purple-500);
    color: var(--purple-500);
  }
`;
