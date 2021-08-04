import styled, { css } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

interface Props {
  collapse: boolean;
}

export const CollapseContainer = styled.div`
  width: 100%;
  padding: 0.6em 1em;
  margin: 0.2em 0 0.8em 0;

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
`;

export const CollapseHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CollapseTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: var(--dark-purple);
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
    color: var(--dark-purple);
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
