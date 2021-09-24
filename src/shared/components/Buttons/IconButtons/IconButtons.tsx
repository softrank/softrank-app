import { IoIosAdd, IoIosArrowDown } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { HiOutlineTrash } from 'react-icons/hi';
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

const EditIcon = styled(MdEdit)`
  ${iconCss}

  padding: ${(props) => (props.size === 'small' ? '4px' : '6px')};
`;

const RemoveIcon = styled(HiOutlineTrash)`
  ${iconCss}
`;

export { ToggleIcon, AddIcon, EditIcon, RemoveIcon };
