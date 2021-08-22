import styled, { css } from 'styled-components';
import { IoIosAdd } from 'react-icons/io';
import { HiOutlineTrash } from 'react-icons/hi';

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.2em;
`;

export const LevelGroup = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 2em;

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
`;

export const GroupDivider = styled.hr`
  height: 2px;
  width: 98%;
  margin: auto;
  margin-top: 0.8em;

  border-style: none;
  border-radius: 20px;
  background-color: var(--gray-100);
`;

const iconCss = css`
  width: 1.6em;
  height: 1.6em;
  padding: 0;
  margin: 0;

  display: block;

  cursor: pointer;
  color: var(--gray-500);

  transition: all 0.5s;

  &:active {
    color: var(--purple-500);
  }
`;

export const CollapseContent = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
`;

export const AddIcon = styled(IoIosAdd)`
  ${iconCss}
`;

export const RemoveIcon = styled(HiOutlineTrash)`
  ${iconCss}
  margin: auto;

  @media (max-width: 640px) {
    width: 90%;
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
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  }
`;
