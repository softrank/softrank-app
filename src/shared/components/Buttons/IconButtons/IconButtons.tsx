import { IoIosAdd, IoIosArrowDown } from 'react-icons/io';
import { FiEdit2 } from 'react-icons/fi';
import styled, { css } from 'styled-components';

interface Props {
  size?: 'small' | 'medium' | 'large';
}

const iconCss = css<Props>`
  width: ${(props) =>
    props.size === 'small' ? '28px' : props.size === 'large' ? '44px' : '36px'};
  height: ${(props) =>
    props.size === 'small' ? '28px' : props.size === 'large' ? '44px' : '36px'};

  padding: 0;
  margin: 0;

  display: inline;

  color: var(--gray-500);
  background: var(--gray-50);
  border-radius: 8px;
  box-sizing: border-box;

  cursor: pointer;
  transition: all 0.5s;

  &:active,
  &:hover {
    color: var(--purple-500);
    background: #eceeff;
  }
`;

const ToggleIcon = styled(IoIosArrowDown)`
  ${iconCss}
`;

const AddIcon = styled(IoIosAdd)`
  ${iconCss}
`;

const EditIcon = styled(FiEdit2)`
  ${iconCss}
  padding: 8px;

  padding: ${(props) => (props.size === 'small' ? '4px' : '8px')};
`;

export { ToggleIcon, AddIcon, EditIcon };
