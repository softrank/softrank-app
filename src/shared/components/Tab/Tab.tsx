import styled, { css } from 'styled-components';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
interface TabProps {
  disabled?: boolean;
}

export const STabs = styled(Tabs)`
  width: 100%;
  height: 100%;
`;

export const STabList = styled(TabList)`
  list-style-type: none;
  display: flex;
`;

export const STab = styled(Tab)<TabProps>`
  padding: 0.2em 0.6em;
  cursor: pointer;

  font-size: var(--font-size-title);
  font-size: 20px;
  font-weight: 500;
  border-bottom: 2px solid var(--gray-50);

  transition: 0.6s;
  color: var(--gray-700);

  &.react-tabs__tab--selected {
    background-color: var(--white);
    border-bottom: 2px solid var(--purple-500);
  }

  ${(props) =>
    props.disabled &&
    css`
      color: var(--gray-500);
      pointer-events: none;
    `}

  @media(max-width: 640px) {
    font-size: 18px;
  }
`;

export const STabPanel = styled(TabPanel)`
  display: none;
  margin-top: 20px;

  &.react-tabs__tab-panel--selected {
    display: block;
  }
`;
