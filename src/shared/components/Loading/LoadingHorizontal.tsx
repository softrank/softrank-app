import { PulseLoader } from 'react-spinners';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;

  /* margin: 1em; */

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
  color?: string;
  speed?: number;
}

export const LoadingHorizontal = ({
  loading,
  content,
  size = 60,
  color = '#625cff',
  speed = 0.4,
}: Props) => {
  return (
    <Container>
      <PulseLoader
        loading={loading}
        color={color}
        size={size}
        speedMultiplier={speed}
      />
      {content && <Content>{content}</Content>}
    </Container>
  );
};
