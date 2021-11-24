import styled from 'styled-components';

export const ActionCardContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  overflow-y: hidden;
  z-index: 0;

  height: auto;

  border-radius: var(--radius);

  &::-webkit-scrollbar {
    height: 4px;
    padding: 10px;
  }
  &::-webkit-scrollbar-track {
    margin: 350px;
    background: var(--purple-300);
    border-radius: var(--radius) 50px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--purple-500);
    border-radius: var(--radius);
    height: 1px;
  }
`;
