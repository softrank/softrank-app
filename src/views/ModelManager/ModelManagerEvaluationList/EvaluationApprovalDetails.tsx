import { useEffect, useState } from 'react';

import {
  Button,
  Collapse,
  FlexSpace,
  Options,
  ReadOnly,
} from 'shared/components';
import { InputGroup } from 'shared/components/Form';
import { EvaluationDetails } from 'shared/models/evaluationDetails';
import { evaluationService } from 'shared/services';
import { FileDisplay } from 'shared/components/FileDisplay/FileDisplay';

interface Props {
  evaluationId: string;
  cancelOption: (state: boolean) => void;
  loadEvaluations: () => void;
}

export const EvaluationApprovalDetails = ({
  evaluationId,
  cancelOption,
  loadEvaluations,
}: Props) => {
  const [evaluation, setEvaluation] = useState<EvaluationDetails>();

  useEffect(() => {
    evaluationService
      .getById(evaluationId)
      .then((evaluation) => setEvaluation(evaluation));
  }, [evaluationId]);

  const formatDate = (date: Date) =>
    new Date(date.toString()).toLocaleDateString('pt-BR');

  const formatEvaluatorType = (
    type: 'evaluator_leader' | 'evaluator_adjunct'
  ) => {
    return type === 'evaluator_leader' ? 'Líder' : 'Adjunto';
  };

  const approveEvaluation = () => {
    evaluationService.nextStep(evaluationId);
    loadEvaluations();
    cancelOption(false);
  };

  return (
    <div style={{ width: '100%' }}>
      {evaluation && (
        <FlexSpace>
          <InputGroup>
            <ReadOnly label="Nome" value={evaluation.name} />
            <ReadOnly label="Estado" value={evaluation?.state} />
            <ReadOnly label="Auditor" value={evaluation?.auditor?.name} />
          </InputGroup>
          <InputGroup>
            <ReadOnly
              label="Nível esperado"
              value={evaluation?.expectedModelLevel?.name}
            />
            <ReadOnly
              label="Data de início"
              value={formatDate(evaluation?.start)}
            />
            <ReadOnly
              label="Data prevista de fim"
              value={formatDate(evaluation?.end)}
            />
          </InputGroup>
          <InputGroup>
            <ReadOnly
              label="Instituição avaliadora"
              value={evaluation?.evaluatorInsitution?.name}
            />
            <ReadOnly
              label="Unidade organizacional"
              value={evaluation?.organizationalUnit?.name}
            />
            {evaluation.plan && (
              <FileDisplay
                label="Plano"
                fileName={evaluation.plan.name}
                url={evaluation.plan.source}
              />
            )}
          </InputGroup>
          <Collapse title="Avaliadores" underline>
            {evaluation?.evaluators?.map((evaluator, index) => {
              return (
                <InputGroup>
                  <ReadOnly label="Nome" value={evaluator.name} />
                  <ReadOnly
                    label="Tipo"
                    value={formatEvaluatorType(evaluator.type)}
                  />
                </InputGroup>
              );
            })}
          </Collapse>
          <Options>
            <Button secondary onClick={() => cancelOption(false)}>
              Cancelar
            </Button>
            <>
              {evaluation?.state === 'Aguardando aprovação' && (
                <Button onClick={() => approveEvaluation()}>Aprovar</Button>
              )}
            </>
          </Options>
        </FlexSpace>
      )}
    </div>
  );
};
