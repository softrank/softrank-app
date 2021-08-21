import styled from 'styled-components';

export default styled.tbody`
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-700);

  > tr {
    transition: transform 600ms ease, box-shadow 200ms ease;
    border-radius: 8px;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      transform: scale(1.01);
    }

    > td {
      padding: 0.8em;

      &:first-child {
        border-radius: 8px 0 0 8px;
      }
      &:last-child {
        border-radius: 0 8px 8px 0;
      }
    }
  }
`;
