import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import {
  Wrapper,
  Title,
  FlexSpace,
  Collapse,
  ReadOnly,
  FileDisplay,
  Divider,
  Button,
  SubTitle,
} from 'shared/components';
import { InputGroup } from 'shared/components/Form';
import { LoadingScreen } from 'shared/components/Loading';
import { EvaluationDetails } from 'shared/models/evaluationDetails';
import { Process } from 'shared/models/process';
import { evaluationService } from 'shared/services';
import { CapacityClassification } from 'views/Evaluation/Classification/CapacityClassification';
import { TargetClassification } from 'views/Evaluation/Classification/TargetClassification';
import { EvidenceStatusForm } from 'views/Evaluation/EvidenceStatus/EvidenceStatusForm';
import { CapacityResponseDto } from 'shared/dtos/capacitiyResponseDto';

export const OrganizationCapacitiesManagmentTeam = () => {
  const [loading, setLoading] = useState(false);
  const [capacities, setCapacities] = useState<CapacityResponseDto[]>([]);
  const [evaluation, setEvaluation] = useState<EvaluationDetails>();
  const [processes, setProcesses] = useState<Process[]>([]);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const loadCapacities = () => {
    setLoading(true);
    evaluationService
      .getCapacities(id!, 'O')
      .then((capacities) => setCapacities(capacities))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadCapacities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    evaluationService
      .getById(id!)
      .then((evaluation) => setEvaluation(evaluation));
    evaluationService
      .getOrganizationalProcesses(id!)
      .then((processes) => setProcesses(processes));
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
                  {evaluation?.state === 'Avaliação final' ? (
                    <FlexSpace>
                      <SubTitle>Classificação</SubTitle>
                      <CapacityClassification
                        capacityId={capacity.id}
                        status={capacity.status}
                      />
                      <Collapse title="Processos" underline>
                        {processes.map((process, processIndex) => {
                          return (
                            <TargetClassification
                              key={processIndex}
                              label="Processo"
                              targetId={process.id}
                              targetName={`${process.name} - ${process.initial}`}
                              capacityId={capacity.id}
                              status={
                                capacity?.modelProcessAvaliations?.find(
                                  (x) => x.modelProcessId === process.id
                                )?.status
                              }
                            />
                          );
                        })}
                      </Collapse>
                    </FlexSpace>
                  ) : (
                    <></>
                  )}

                  <SubTitle>Indicadores</SubTitle>
                  <FlexSpace>
                    {capacity.indicators.map((indicator, indexInd) => {
                      return (
                        <Collapse
                          title={indicator.name}
                          key={indexInd}
                          underline
                        >
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
                  </FlexSpace>
                </Collapse>
              );
            })}
          </FlexSpace>
          <Button
            secondary
            width="6rem"
            onClick={() => navigate(`/avaliacao/home/${id}`)}
          >
            Voltar
          </Button>
        </Wrapper>
      )}
    </>
  );
};
