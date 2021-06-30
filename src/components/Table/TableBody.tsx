import styled from 'styled-components';

export default styled.tbody`
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  color: var(--gray-900);

  > tr > td {
    padding: 0.4em 0.8em;
  }

  > tr:nth-child(odd) > td {
    background-color: #f0efff;
  }
`;
