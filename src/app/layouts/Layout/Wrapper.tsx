import styled from 'styled-components';

export default styled.div`
  height: 100%;
  max-width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 640px) {
    max-width: 100%;
    /* margin: 1em; */
  }
`;
