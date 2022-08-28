import {
  BsCardChecklist,
  BsClipboardData,
  BsReverseLayoutTextSidebarReverse,
} from 'react-icons/bs';
import { CgLoadbarDoc } from 'react-icons/cg';
import { IoIosAdd } from 'react-icons/io';
import styled, { css } from 'styled-components';

export const ActionCardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  min-width: 300px;
  padding: 1rem;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.secundaryBackground};
  color: var(--accent);
  border-radius: var(--radius);

  transition: all 300ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    box-shadow: 0 8px 16px 0 rgb(39 17 45 / 10%);
  }
`;

export const ActionCardHeaderContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;

  width: 100%;

  text-align: center;
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

export const AddIcon = styled(IoIosAdd)`
  ${iconCss}
  height: 60px;
  width: 70px;
`;

export const ReportIcon = styled(BsReverseLayoutTextSidebarReverse)`
  ${iconCss}
  height: 60px;
  width: 70px;
`;

export const ListIcon = styled(BsCardChecklist)`
  ${iconCss}
  height: 60px;
  width: 70px;
`;
