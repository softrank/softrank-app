import styled, { css } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

interface Props {
  collapse?: boolean;
  underline?: boolean;
}

export const CollapseContainer = styled.div<Props>`
  width: 100%;
  padding: 0.6em 1em;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto';

  outline: none;
  border-radius: var(--radius);
  border: 2px solid var(--gray-100);

  &:disabled {
    color: var(--gray-500);
    background: var(--gray-50);
    border: 2px solid var(--gray-50);
    pointer-events: none;
  }

  ${(props) =>
    props.underline &&
    css`
      padding: 0;
      border: none;
    `}
`;

export const CollapseHead = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.underline &&
    css`
      padding-bottom: 0.6em;
      border-bottom: 2px solid var(--gray-100);
    `}
`;

export const CollapseTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: var(--purple-500);
`;

export const CollapseOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const CollapseBody = styled.div`
  padding-top: 0.8em;

  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const iconCss = css`
  width: 1.4em;
  height: 1.4em;
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

export const ToggleCollapseIcon = styled(IoIosArrowDown)<Props>`
  ${iconCss}

  ${(props) =>
    !props.collapse &&
    css`
      transform: rotate(180deg);
    `}
`;

export const NoContent = styled.div`
  text-align: center;
  color: var(--gray-700);
  padding-bottom: 0.8em;
`;

export const CollapseDivider = styled.hr`
  height: 2px;
  width: 98%;
  margin: auto;
  margin-top: 0.8em;

  border-style: none;
  border-radius: 20px;
  background-color: var(--gray-100);
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
