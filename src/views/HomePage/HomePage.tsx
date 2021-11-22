import { useHistory } from 'react-router';
import { Title, Wrapper } from 'shared/components';
import {
  ActionCard,
  ActionCardContainer,
  ActionCardHeaderContent,
  ActionCardTitle,
  DocIcon,
  EvaluationIcon,
} from './styled';

export const HomePage = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Title>Atividades</Title>
      <ActionCardContainer>
        <ActionCard onClick={() => history.push('avaliacoes')}>
          <ActionCardHeaderContent>
            <ActionCardTitle>Avaliações</ActionCardTitle>
            <EvaluationIcon />
          </ActionCardHeaderContent>
        </ActionCard>
        <ActionCard onClick={() => history.push('modelos')}>
          <ActionCardHeaderContent>
            <ActionCardTitle>Modelos</ActionCardTitle>
            <DocIcon />
          </ActionCardHeaderContent>
        </ActionCard>
      </ActionCardContainer>
    </Wrapper>
  );
};
