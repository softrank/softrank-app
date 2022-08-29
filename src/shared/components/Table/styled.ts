import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow: auto;
`;

export const TableStyle = styled.table`
  width: 100%;
  min-width: 400px;
  border-spacing: 0 5px;
  table-layout: fixed;
`;

export const TableHead = styled.thead`
  text-align: left;
  font-size: 20px;
  color: ${({ theme }) => theme.text};

  > tr > th {
    padding: 0.4em 0.6em;
    background: ${({ theme }) => theme.background};

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
  color: ${({ theme }) => theme.text};

  > tr {
    transition: transform 600ms ease, box-shadow 200ms ease;
    border-radius: 8px;

    > td {
      padding: 0.2em 0.8em;
      width: 100px;

      &:first-child {
        border-radius: 8px 0 0 8px;
      }
      &:last-child {
        border-radius: 0 8px 8px 0;
      }
    }
  }
`;
