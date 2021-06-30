import styled from 'styled-components';

export default styled.li`
  display: block;
  padding: 0.7em;
  margin: 0.2em;

  font-weight: bold;
  text-decoration: none;

  color: var(--dark-purple);
  list-style-type: none;

  &:hover {
    /* display: block; */
    color: var(--dark-purple);
    background-color: var(--light-purple);
    border-radius: var(--radius);
  }
`;
