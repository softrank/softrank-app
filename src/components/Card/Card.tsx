import styled from 'styled-components';

export default styled.div`
  background: var(--white);
  width: 100%;
  margin-top: 1em;
  padding: 1.4em;
  border-radius: var(--radius);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (max-width: 640px) {
    box-shadow: none;
    border: none;
    background: none;
    margin: 0;
  }
`;

export const CardTitle = styled.h1`
  margin-bottom: 0.2em;
  margin-left: 0.6em;
  display: flex;
  justify-content: start;

  font-weight: 600;
  font-size: 42px;
  font-family: 'Montserrat', sans-serif;

  color: var(--gray-700);

  @media (max-width: 640px) {
    font-size: 30px;
    margin: 0.2em 0 0.6em 0.3em;
  }
`;
