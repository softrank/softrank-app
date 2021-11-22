import styled, { css } from 'styled-components';
import { BsClipboardData } from 'react-icons/bs';
import { CgLoadbarDoc } from 'react-icons/cg';

export const ActionCardContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ActionCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  min-height: 200px;
  min-width: 300px;
  padding: 1rem;
  box-sizing: border-box;

  background-color: var(--purple-50);
  color: var(--purple-500);
  border-radius: var(--radius);

  transition: all 400ms ease-in-out;

  &:hover {
    transform: scale(1.06);
    cursor: pointer;
  }
`;

export const ActionCardHeaderContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
`;

export const ActionCardTitle = styled.h1`
  font-size: 32px;
`;

const iconCss = css`
  width: 50px;
  height: 50px;
`;

export const EvaluationIcon = styled(BsClipboardData)`
  ${iconCss}
`;

export const DocIcon = styled(CgLoadbarDoc)`
  ${iconCss}
`;
