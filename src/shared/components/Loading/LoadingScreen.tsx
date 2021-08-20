import { MoonLoader } from 'react-spinners';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const SpinnerContent = styled.h3`
  margin-top: 20px;
  font-size: 16px;
  color: var(--gray-700);
`;

interface Props {
  loading: boolean;
  content: string;
}

export const LoadingScreen = (props: Props) => {
  const { loading, content } = props;

  return (
    <SpinnerContainer>
      <MoonLoader
        loading={loading}
        color={'#625cff'}
        size={60}
        speedMultiplier={0.9}
      />
      {content && <SpinnerContent>{content}</SpinnerContent>}
    </SpinnerContainer>
  );
};
