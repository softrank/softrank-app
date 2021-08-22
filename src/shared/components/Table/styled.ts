import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow: auto;
  /* display: flex;
  justify-content: center; */
`;

export const TableStyle = styled.table`
  width: 100%;
  min-width: 400px;
  border-spacing: 0 5px;
`;

export const TableHead = styled.thead`
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

export const TableBody = styled.tbody`
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-700);

  > tr {
    transition: transform 600ms ease, box-shadow 200ms ease;
    border-radius: 8px;

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
