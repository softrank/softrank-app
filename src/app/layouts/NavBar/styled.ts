import styled from 'styled-components';

export const Header = styled.header`
  padding: 0.4em;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  align-items: center;
  background: var(--white);
  border-bottom: 1px solid var(--gray);
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 100%;
  min-width: 90%;
`;

export const HeaderTitle = styled.h1`
  color: var(--accent);
  font-size: 1.6rem;
`;
