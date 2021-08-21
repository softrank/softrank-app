import styled from 'styled-components';

export default styled.thead`
  text-align: left;
  font-size: 20px;
  color: var(--gray-700);

  > tr > th {
    padding: 0.6em;
    background: var(--gray-50);

    &:first-child {
      border-radius: 8px 0 0 8px;
    }
    &:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
