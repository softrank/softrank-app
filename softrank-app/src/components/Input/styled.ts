import styled from 'styled-components';

interface Props {
  color?: string;
}

export const FormInput = styled.input<Props>`
  width: 100%;
  color: ${(props) => (props.color ? props.color : 'var(--primary)')};
  padding: 0.2em;
  border: 10px solid var(--primary);
`;
