import { IoIosAdd, IoIosArrowDown, IoMdExit } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { HiOutlineDownload, HiOutlineTrash } from 'react-icons/hi';
import styled, { css } from 'styled-components';

interface Props {
  $size?: 'small' | 'medium' | 'large';
  $disable?: boolean;
  $outline?: boolean;
}

const iconCss = css<Props>`
  width: ${(props) =>
    props.$size === 'small'
      ? '28px'
      : props.$size === 'large'
      ? '44px'
      : '36px'};
  height: ${(props) =>
    props.$size === 'small'
      ? '28px'
      : props.$size === 'large'
      ? '44px'
      : '36px'};

  padding: 0;
  margin: 0;

  display: ${(props) => (props.$disable ? 'none' : 'inline')};

  color: var(--gray-500);
  background: ${(props) => (props.$outline ? 'none' : 'var(--gray-50)')};
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

  padding: ${(props) => (props.$size === 'small' ? '4px' : '6px')};
`;

const RemoveIcon = styled(HiOutlineTrash)`
  ${iconCss}
  padding: ${(props) => (props.$size === 'small' ? '4px' : '6px')};
`;

const ExitIcon = styled(IoMdExit)`
  ${iconCss}
  padding: ${(props) => (props.$size === 'small' ? '4px' : '6px')};
`;

const DownloadIcon = styled(HiOutlineDownload)`
  ${iconCss}

  &:active,
  &:hover {
    color: var(--purple-500);
    background: none;
  }
`;

export { ToggleIcon, AddIcon, EditIcon, RemoveIcon, ExitIcon, DownloadIcon };
