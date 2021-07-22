import { PulseLoader } from 'react-spinners';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;

  margin: 1em;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.h3`
  margin-top: 10px;
  font-size: 14px;
  color: var(--gray-700);
`;

interface Props {
  loading: boolean;
  content?: string;
  size?: number;
}

export const LoadingHorizontal = ({ loading, content, size = 60 }: Props) => {
  return (
    <Container>
      <PulseLoader
        loading={loading}
        color={'#625cff'}
        size={size}
        speedMultiplier={0.4}
      />
      {content && <Content>{content}</Content>}
    </Container>
  );
};
