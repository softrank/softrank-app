import { useHistory } from 'react-router';
import {
  ActionCardHeaderContent,
  ActionCardStyle,
  ActionCardTitle,
  AddIcon,
  DocIcon,
  EvaluationIcon,
} from './styled';

interface Props {
  path: string;
  title: string;
  icon: 'evaluation' | 'doc' | 'add';
}

export const ActionCard = ({ path, title, icon }: Props) => {
  const history = useHistory();

  return (
    <ActionCardStyle onClick={() => history.push(path)}>
      <ActionCardHeaderContent>
        <ActionCardTitle>{title}</ActionCardTitle>
        {icon === 'evaluation' && <EvaluationIcon />}
        {icon === 'doc' && <DocIcon />}
        {icon === 'add' && <AddIcon />}
      </ActionCardHeaderContent>
    </ActionCardStyle>
  );
};
