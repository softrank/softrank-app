import { ActionImage, ActionImageContainer, ActionImageTitle } from './style';

interface Props {
  title: string;
  src: string;
  alt: string;
  onClick: () => void;
}

export const ActionCardImage = ({ title, src, alt, onClick }: Props) => {
  return (
    <ActionImageContainer onClick={() => onClick()} title={title}>
      <ActionImage src={src} alt={alt} />
      <ActionImageTitle>{title}</ActionImageTitle>
    </ActionImageContainer>
  );
};
