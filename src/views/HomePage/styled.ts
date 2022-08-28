import styled from 'styled-components';

export const ActionCardContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: visible;
  z-index: 0;

  border-radius: var(--radius);

  &::-webkit-scrollbar {
    height: 4px;
    padding: 10px;
  }
  &::-webkit-scrollbar-track {
    margin: 20vw;
    background: var(--purple-300);
    border-radius: var(--radius) 50px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--purple-500);
    border-radius: var(--radius);
    height: 1px;
  }
`;

export const Hero = styled.div`
  width: auto;
  display: flex;
  justify-content: right;
  position: relative;
`;

export const HeroImage = styled.img`
  right: 0;
  width: 600px;
  margin-left: -10px;
`;

export const HeroTitle = styled.span`
  position: absolute;
  top: 10vh;
  left: 0;
  color: var(--text-color);
  font-size: 3rem;
  max-width: 400px;
  padding: 0.2em;
  text-align: center;
  border-radius: var(--radius);
  background-color: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;
