import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
import { Form, InputGroup, Radio, RadioGroup } from 'shared/components/Form';
import { File } from 'shared/components/File/File';
import { evaluationService } from 'shared/services';
import { LoadingScreen } from 'shared/components/Loading';
import { EvaluationProcess } from 'shared/models/evaluationProcess';
import { Title3 } from 'shared/components/Titles/Title3';

export const InitialEvaluationTeam = () => {
  const { id } = useParams<{ id: string }>();
  const { handleSubmit, register } = useForm<any>();

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

  const onSubmit = handleSubmit((data) => console.log(data));

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
            <Form onSubmit={onSubmit}>
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
                                  />
                                </InputGroup>
                                <InputGroup>
                                  <RadioGroup label="Status">
                                    <Radio
                                      name={`acceptanceLevel[${index}]`}
                                      value="1"
                                      color="red"
                                      legend="Inválido"
                                      register={register}
                                    />
                                    <Radio
                                      name={`acceptanceLevel[${index}]`}
                                      value="2"
                                      color="yellow"
                                      legend="Incompleto"
                                      register={register}
                                    />
                                    <Radio
                                      name={`acceptanceLevel[${index}]`}
                                      value="3"
                                      color="green"
                                      legend="Completo"
                                      register={register}
                                    />
                                    <Radio
                                      name={`acceptanceLevel[${index}]`}
                                      value="4"
                                      legend="N/A"
                                      register={register}
                                    />
                                  </RadioGroup>
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
            </Form>
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
