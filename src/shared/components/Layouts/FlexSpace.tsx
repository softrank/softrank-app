import styled from 'styled-components';

interface Props {
  space?: string;
}

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.space ?? '2rem'};
`;
