import { useEffect, useState } from 'react';
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
} from 'shared/components';
import { InputGroup } from 'shared/components/Form';
import { File } from 'shared/components/File/File';
import { evaluationService } from 'shared/services';
import { LoadingScreen } from 'shared/components/Loading';
import { EvaluationProcess } from 'shared/models/evaluationProcess';
import { Title3 } from 'shared/components/Titles/Title3';
import { InitalEvaluationTeamForm } from './InitalEvaluationTeamForm';

export const InitialEvaluationTeam = () => {
  const { id } = useParams<{ id: string }>();

  const [tabIndex, setTabIndex] = useState(0);
  const [processes, setProcesses] = useState<EvaluationProcess[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    evaluationService
      .getProcesses(id)
      .then((processes) => {
        setProcesses(processes);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando avaliação..." />
      ) : (
        <Wrapper>
          <Title>Avaliação</Title>
          <STabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
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
                    {process.expectedResults?.map((er, index) => {
                      return (
                        <Collapse title={er.initial} key={index}>
                          <Title3>{er.description}</Title3>
                          <Collapse title="Documento de requisitos" underline>
                            <div>
                              <InputGroup>
                                <ReadOnly label="Projeto" value="Projeto 2" />
                                <File
                                  label="Fonte de evidência"
                                  path="Outro arquivo"
                                  source="some"
                                />
                              </InputGroup>
                              <InputGroup>
                                <InitalEvaluationTeamForm
                                  process={process}
                                  index={index}
                                />
                              </InputGroup>
                            </div>
                            <Divider />
                          </Collapse>
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
              <Options>
                <Button secondary onClick={() => setTabIndex(tabIndex - 1)}>
                  Anterior
                </Button>
                <Button onClick={() => setTabIndex(tabIndex + 1)}>
                  Próximo
                </Button>
              </Options>
            )}
          </STabs>
        </Wrapper>
      )}
    </>
  );
};
