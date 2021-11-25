import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';

interface Props {
  isActive: boolean;
}

export const StyledDropzone = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  height: 8em;
  width: 100%;

  padding: 0.6em;
  margin-top: 0.4em;

  border-radius: var(--radius);
  border: ${(props) =>
    props.isActive ? 'dashed 3px #74c69d' : 'dashed 3px var(--purple-500)'};

  text-align: center;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto';
  color: var(--gray-700);

  transition: all 200ms ease;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const ZoneTitle = styled.p`
  font-weight: 500;
`;

export const FilesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
`;

export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  padding: 0.4rem;
  margin-top: 8px;
  border-radius: var(--radius);
  max-width: 260px;

  background-color: var(--gray-100);
  background-color: rgba(231, 234, 251, 0.46);

  div {
    color: var(--gray-700);
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;
  }
`;

export const FileWrapper = styled.div`
  max-width: 30px;
`;

export const RemoveFileButton = styled(IoIosClose)`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  z-index: 100;

  cursor: pointer;
  color: var(--gray-500);

  transition: all 400ms ease;

  &:hover {
    color: var(--purple-500);
    cursor: pointer;
    transform: scale(1.1);
  }
`;
