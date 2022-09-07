import styled from 'styled-components';

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1;
  color: ${({ theme }) => theme.text};

  @media (max-width: 640px) {
    font-size: 22px;
    margin: 0.6em 0 0.6em 0.3em;
    line-height: 0.5;
  }
`;
