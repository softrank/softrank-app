import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
