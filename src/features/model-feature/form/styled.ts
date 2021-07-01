import styled from 'styled-components';

export const FormTitle = styled.h1`
  margin: 0.6em 0 0 0.2em;
  display: flex;
  justify-content: start;

  font-weight: 400;
  font-size: 2rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
`;
