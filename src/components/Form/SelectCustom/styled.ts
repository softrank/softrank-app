import styled, { css } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

interface Props {
  error?: boolean;
  disabled?: boolean;
  active?: boolean;
}

export const SelectBody = styled.div<Props>`
  --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  width: 100%;
  padding: 0.6em;
  margin: 0.2em 0 0.8em 0;

  display: flex;
  justify-content: space-between;

  font-size: 1.2rem;

  border-radius: var(--radius);
  appearance: none;
  transition: 0.4s;
  outline: none;
  color: var(--gray-700);
  border: 2px solid var(--gray-100);

  ${(props) =>
    props.error &&
    `
    color: var(--error);
    border: 2px solid var(--error);
  `};

  ${(props) =>
    props.disabled &&
    `
    background: var(--gray-50);
    border: 2px solid var(--gray-50);
    pointer-events: none;
    > div {
      color: var(--gray-500);
    }
  `};

  ${(props) =>
    props.active &&
    `
    box-shadow: var(--box-shadow);
    border: 2px solid var(--dark-purple);
    color: black;
  `};

  &:hover {
    box-shadow: var(--box-shadow);
    border: 2px solid var(--dark-purple);
    color: black;
  }

  &:focus {
    box-shadow: var(--box-shadow);
    border: 2px solid var(--dark-purple);
    color: black;
  }
`;

export const SelectDropdown = styled.div`
  position: relative;
  z-index: 1;
`;

export const SelectList = styled.ul`
  position: absolute;
  top: -0.6em;
  padding: 0.1em 0;

  display: flex;
  flex-direction: column;
  justify-content: start;

  min-width: 200px;

  background-color: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--gray-100);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

interface OptionProps {
  disabled?: boolean;
}

export const SelectOption = styled.li<OptionProps>`
  display: block;
  padding: 0.7em;
  margin: 0.2em;

  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;

  border-radius: var(--radius);
  color: var(--gray-700);
  list-style-type: none;
  transition: 0.2s;

  &:hover {
    color: var(--dark-purple);
    background-color: var(--light-purple);
  }

  &:active {
    color: var(--white);
    background-color: var(--dark-purple);
  }

  ${(props) =>
    props.disabled &&
    `
    color: var(--gray-500);
    background-color: var(--gray-50);
    pointer-events: none;
  `};
`;

export const Divider = styled.hr`
  height: 0.5px;
  width: 94%;
  margin: auto;

  border-style: none;
  background-color: var(--gray-100);
`;

const iconCss = css`
  width: 1.4em;
  height: 1.4em;

  color: var(--gray-500);

  cursor: pointer;
`;

export const SelectIcon = styled(IoIosArrowDown)<Props>`
  ${iconCss}
  float: left;
`;
