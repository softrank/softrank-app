import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import {
  Wrapper,
  Title,
  FlexSpace,
  Collapse,
  ReadOnly,
  FileDisplay,
  Divider,
  Button,
} from 'shared/components';
import { InputGroup } from 'shared/components/Form';
import { LoadingScreen } from 'shared/components/Loading';
import { EvaluationDetails } from 'shared/models/evaluationDetails';
import { evaluationService } from 'shared/services';
import { EvidenceStatusForm } from 'views/Evaluation/EvidenceStatus/EvidenceStatusForm';
import { CapacityResponseDto } from '../../../../shared/dtos/capacitiyResponseDto';

export const OrganizationCapacitiesManagmentTeam = () => {
  const [loading, setLoading] = useState(false);
  const [capacities, setCapacities] = useState<CapacityResponseDto[]>([]);
  const [evaluation, setEvaluation] = useState<EvaluationDetails>();

  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const loadCapacities = () => {
    setLoading(true);
    evaluationService
      .getCapacities(id, 'O')
      .then((capacities) => setCapacities(capacities))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadCapacities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    evaluationService
      .getById(id)
      .then((evaluation) => setEvaluation(evaluation));
  }, [id]);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando capacidades..." />
      ) : (
        <Wrapper>
          <Title>Capacidades de Processo - Organizacional</Title>
          <FlexSpace space="1rem">
            {capacities?.map((capacity, index) => {
              return (
                <Collapse title={capacity.name} key={index}>
                  {capacity.indicators.map((indicator, indexInd) => {
                    return (
                      <Collapse title={indicator.name} key={indexInd} underline>
                        {indicator.evidenceSources?.map(
                          (evidence, indexFile) => (
                            <React.Fragment key={indexFile}>
                              <InputGroup>
                                <ReadOnly
                                  label="Projeto"
                                  value={evidence.project?.name ?? ''}
                                />
                                <FileDisplay
                                  label="Fonte de evidência"
                                  fileName={evidence.files[0].name}
                                  url={evidence.files[0].source}
                                />
                              </InputGroup>
                              <InputGroup>
                                <EvidenceStatusForm
                                  evidenceId={evidence.id}
                                  status={
                                    evidence.status !== null
                                      ? evidence.status
                                      : 'n/a'
                                  }
                                  disabled={
                                    evaluation?.state !== evidence.createdOn
                                  }
                                />
                              </InputGroup>
                              {indexFile !==
                                indicator.evidenceSources.length - 1 && (
                                <Divider />
                              )}
                            </React.Fragment>
                          )
                        )}
                      </Collapse>
                    );
                  })}
                </Collapse>
              );
            })}
          </FlexSpace>
          <Button
            secondary
            width="6rem"
            onClick={() => history.push(`/avaliacao/home/${id}`)}
          >
            Voltar
          </Button>
        </Wrapper>
      )}
    </>
  );
};
