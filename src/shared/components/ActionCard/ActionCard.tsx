import {
  ActionCardHeaderContent,
  ActionCardStyle,
  ActionCardTitle,
  AddIcon,
  DocIcon,
  EvaluationIcon,
  ListIcon,
  ReportIcon,
} from './styled';

interface Props {
  title: string;
  icon: 'evaluation' | 'doc' | 'add' | 'report' | 'list';
  onClick: () => void;
}

export const ActionCard = ({ title, icon, onClick }: Props) => {
  return (
    <ActionCardStyle onClick={() => onClick()}>
      <ActionCardHeaderContent>
        <ActionCardTitle>{title}</ActionCardTitle>
        {icon === 'evaluation' && <EvaluationIcon />}
        {icon === 'doc' && <DocIcon />}
        {icon === 'add' && <AddIcon />}
        {icon === 'report' && <ReportIcon />}
        {icon === 'list' && <ListIcon />}
      </ActionCardHeaderContent>
    </ActionCardStyle>
  );
};
