import styled from 'styled-components';

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > p {
    color: ${({ theme }) => theme.text};
    font-size: 1.4rem;
  }
`;

export const LongTableLine = styled.td`
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
