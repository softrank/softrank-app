import styled from 'styled-components';

export default styled.tbody`
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;

  > tr > td {
    padding: 0.3em 0;
  }

  > tr:nth-child(odd) > td {
    background-color: #f0efff;
  }
`;
