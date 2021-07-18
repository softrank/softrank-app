import styled from 'styled-components';

export const RowResponsive = styled.div`
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

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.2em;
`;

export const ModalImage = styled.img`
  width: 70%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 420px) {
    width: 100%;
  }
`;
