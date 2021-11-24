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

  &:hover {
    cursor: pointer;
  }
`;

export const ZoneTitle = styled.p`
  font-weight: 500;
`;
