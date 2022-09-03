import styled, { css } from 'styled-components';
import { IoIosAdd } from 'react-icons/io';
import { HiOutlineTrash } from 'react-icons/hi';

export const Options = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.2em;
`;

const iconCss = css`
  width: 1.6em;
  height: 1.6em;
  padding: 0;
  margin: 0;

  display: block;

  cursor: pointer;
  color: ${({ theme }) => theme.disabledText};

  transition: all 0.5s;

  &:active,
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const AddIcon = styled(IoIosAdd)`
  ${iconCss}
`;

export const RemoveIcon = styled(HiOutlineTrash)`
  ${iconCss}
  margin: auto;
  min-width: 50px;
  position: relative;
  top: 10px;

  @media (max-width: 640px) {
    width: 100%;
    height: 2.4em;
    padding: 0.2em;

    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;

    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.disabledText};
    outline: none;

    transition: all 600ms ease;

    &:hover {
      box-shadow: 0 8px 16px 0 rgb(39 17 45 / 10%);
      background-color: ${({ theme }) => theme.accentBackground};
      border: 2px solid ${({ theme }) => theme.accent};
      color: ${({ theme }) => theme.accent};
      transform: translateY(-3px);
    }
  }
`;

export const LevelItem = styled.div`
  width: 100%;
  padding: 1em;
  margin-bottom: 0.6rem;

  font-size: 16px;

  outline: none;
  border-radius: var(--radius);
  border: 2px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};

  background: ${({ theme }) => theme.body};

  transition: all 400ms ease;

  &:hover,
  &:active {
    border: 2px solid ${({ theme }) => theme.accent};
  }
`;

export const Info = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 0 0.2rem;
  margin-bottom: 1.4rem;
  color: ${({ theme }) => theme.text};
`;
