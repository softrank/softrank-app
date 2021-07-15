import styled from 'styled-components';

export const Page404 = styled.div`
  padding: 0 1em;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title404 = styled.h1`
  color: var(--gray-700);
  font-size: 26px;
  text-align: center;
  margin-top: 2em;

  @media (max-width: 430px) {
    font-size: 20px;
    margin: 4vh 0 8vh 0;
  }
`;

export const Image404 = styled.img`
  max-width: 80%;
  margin-top: -2rem;

  @media (max-width: 430px) {
    max-width: 120%;
  }
`;
