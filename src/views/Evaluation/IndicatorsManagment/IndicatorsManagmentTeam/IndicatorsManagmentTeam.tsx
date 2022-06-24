import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import {
  FlexSpace,
  Collapse,
  Title,
  Wrapper,
  Button,
  ReadOnly,
  Divider,
  Options,
  STab,
  STabList,
  STabPanel,
  STabs,
  Title3,
  FileDisplay,
  SubTitle,
} from 'shared/components';
import { InputGroup } from 'shared/components/Form';
import { evaluationService } from 'shared/services';
import { LoadingScreen } from 'shared/components/Loading';
import { EvaluationProcess } from 'shared/models/evaluationProcess';
import { EvaluationDetails } from 'shared/models/evaluationDetails';
import { EvidenceStatusForm } from '../../EvidenceStatus/EvidenceStatusForm';
import { ExpectedResultClassificationForm } from './Forms/ExpectedResultClassificationForm';
import { ProjectsClassificationForm } from './Forms/ProjectsClassificationForm';

export const IndicatorsManagmentTeam = () => {
  const { id } = useParams<{ id: string }>();

  const [tabIndex, setTabIndex] = useState(0);
  const [processes, setProcesses] = useState<EvaluationProcess[]>([]);
  const [loading, setLoading] = useState(true);
  const [evaluation, setEvaluation] = useState<EvaluationDetails>();

  const loadProcesses = (id: string) => {
    setLoading(true);
    evaluationService
      .getProcesses(id)
      .then((processes) => setProcesses(processes));
    setLoading(false);
  };

  const handleTabChange = (tabIndex: number) => {
    loadProcesses(id);
    setTabIndex(tabIndex);
  };

  useEffect(() => loadProcesses(id), [id]);

  useEffect(() => {
    evaluationService
      .getById(id)
      .then((evaluation) => setEvaluation(evaluation));
  }, [id]);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando avaliação..." />
      ) : (
        <Wrapper>
          <Title>Planilha de indicadores</Title>
          <STabs
            selectedIndex={tabIndex}
            onSelect={(index) => handleTabChange(index)}
          >
            <STabList>
              {processes?.map((process, index) => {
                return <STab key={index}>{process.initial}</STab>;
              })}
            </STabList>

            {processes?.map((process, index) => {
              return (
                <STabPanel key={index}>
                  <FlexSpace space="1rem">
                    {process.expectedResults?.map((er, indexEr) => {
                      return (
                        <Collapse title={er.initial} key={indexEr}>
                          <Title3>{er.description}</Title3>
                          {evaluation?.state === 'Avaliação final' ? (
                            <FlexSpace>
                              <SubTitle>Classificação</SubTitle>
                              <ExpectedResultClassificationForm
                                expectedResultId={er.id}
                                status={er.status}
                              />

                              <Collapse title="Projetos" underline>
                                {evaluation.projects.map(
                                  (project, projectIndex) => {
                                    return (
                                      <ProjectsClassificationForm
                                        key={projectIndex}
                                        project={project}
                                        expectedResultId={er.id}
                                        status={
                                          er.projectsAvaliations.find(
                                            (x) => x.projectId === project.id
                                          )?.status
                                        }
                                      />
                                    );
                                  }
                                )}
                              </Collapse>
                            </FlexSpace>
                          ) : (
                            <></>
                          )}
                          <SubTitle>Indicadores</SubTitle>
                          <FlexSpace>
                            {er.indicators.map((indicator, indexIn) => {
                              return (
                                <Collapse
                                  title={indicator.name}
                                  underline
                                  key={indexIn}
                                >
                                  {indicator.evidenceSources.map(
                                    (evidence, indexFile) => {
                                      return (
                                        <React.Fragment key={indexFile}>
                                          <InputGroup>
                                            <ReadOnly
                                              label="Projeto"
                                              value={
                                                evidence.project?.name ?? ''
                                              }
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
                                                evaluation?.state !==
                                                evidence.createdOn
                                              }
                                            />
                                          </InputGroup>
                                          {indexFile !==
                                            indicator.evidenceSources.length -
                                              1 && <Divider />}
                                        </React.Fragment>
                                      );
                                    }
                                  )}
                                </Collapse>
                              );
                            })}
                          </FlexSpace>
                        </Collapse>
                      );
                    })}
                  </FlexSpace>
                </STabPanel>
              );
            })}
            {tabIndex === 0 ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  marginTop: '1rem',
                }}
              >
                <Button onClick={() => setTabIndex(tabIndex + 1)}>
                  Próximo
                </Button>
              </div>
            ) : tabIndex === processes.length - 1 ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '1rem',
                }}
              >
                <Button secondary onClick={() => setTabIndex(tabIndex - 1)}>
                  Anterior
                </Button>
              </div>
            ) : (
              <div style={{ marginTop: '1rem' }}>
                <Options>
                  <Button secondary onClick={() => setTabIndex(tabIndex - 1)}>
                    Anterior
                  </Button>
                  <Button onClick={() => setTabIndex(tabIndex + 1)}>
                    Próximo
                  </Button>
                </Options>
              </div>
            )}
          </STabs>
        </Wrapper>
      )}
    </>
  );
};
