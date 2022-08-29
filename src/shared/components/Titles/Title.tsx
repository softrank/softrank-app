import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1;
  color: ${({ theme }) => theme.text};

  @media (max-width: 640px) {
    font-size: 30px;
    margin: 0.2em 0 0.6em 0.3em;
  }
`;
