import styled from 'styled-components';

export default styled.div`
  height: 100%;
  max-width: 80vw;

  margin: 0 auto;
  padding: 2rem 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 640px) {
    max-width: 100%;
    padding: 2rem;
  }
`;
