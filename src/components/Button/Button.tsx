import styled from 'styled-components';

export default styled.button`
  width: 10em;
  height: 2.2em;
  font-size: 1.2rem;
  border-radius: 6px;
  margin: 0.8em 0;
  border: 2px solid var(--accent);
  background: var(--accent);
  color: var(--white);
  box-sizing: border-box;
  border-style: none;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: white;
    border: 2px solid var(--accent);
    color: var(--accent);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: white;
    border: 2px solid var(--accent);
    color: var(--accent);
  }

  &:active {
    background-color: var(--light-purple);
    border: 2px solid var(--accent);
    color: var(--accent);
  }
`;
