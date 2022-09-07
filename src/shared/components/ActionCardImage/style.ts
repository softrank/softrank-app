import styled from 'styled-components';

export const ActionImageContainer = styled.div`
  min-height: 200px;
  min-width: 300px;
  padding: 1rem;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  border-radius: var(--radius);
  border: 2px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.body};

  transition: all 300ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    box-shadow: 0 8px 16px 0 rgb(39 17 45 / 10%);
  }
`;

export const ActionImage = styled.img`
  width: 50%;
`;

export const ActionImageTitle = styled.span`
  width: 100%;
  line-height: 1;
  color: var(--purple-500);
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 0 0 var(--radius) var(--radius);
`;
