import { LoadingHorizontal } from 'shared/components/Loading';
import { StyledButton } from './styled';

interface Props {
  width?: string;
  loading?: boolean;
  children: JSX.Element | string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  secondary?: boolean;
  neutral?: boolean;
}

export const Button = (props: Props) => {
  const {
    loading = false,
    children,
    onClick,
    type = 'button',
    width,
    disabled,
    secondary,
    neutral,
  } = props;

  return (
    <StyledButton
      onClick={onClick}
      type={type}
      width={width}
      disabled={disabled}
      secondary={secondary}
      neutral={neutral}
    >
      {loading ? (
        <LoadingHorizontal
          loading={loading}
          size={10}
          color={secondary ? undefined : 'white'}
          speed={0.9}
        />
      ) : (
        children
      )}
    </StyledButton>
  );
};
