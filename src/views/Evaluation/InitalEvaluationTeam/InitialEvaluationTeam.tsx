import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
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
import { ERTitle } from '../EvaluationDetails/styled';
import { modelDummy } from 'shared/data/modelDummy';
import { Process } from 'shared/models/process';
import { File } from 'shared/components/File/File';

export const InitialEvaluationTeam = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [processes, setProcesses] = useState<Process[]>([]);

  const { id } = useParams<{ id: string }>();

  const { control, handleSubmit, register } = useForm<any>();

  const { fields } = useFieldArray({
    control,
    name: 'acceptanceLevel',
  });

  useEffect(() => {
    setProcesses(modelDummy.modelProcesses);
  }, [processes]);

  // useEffect(() => {
  //   evaluationService.getIndicators(id).then(res => {
  //     setProcesses
  //   })
  // }, [third])

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Wrapper>
      <Title>Avaliação</Title>
      <STabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <STabList>
          {processes?.map((process, index) => {
            return <STab key={index}>{process.initial}</STab>;
          })}
        </STabList>
        {processes?.map((process, index) => {
          return (
            <STabPanel key={index}>
              <Form onSubmit={onSubmit}>
                <FlexSpace space="1rem">
                  {process.expectedResults?.map((er, index) => {
                    return (
                      <Collapse title={er.initial} key={index}>
                        <ERTitle>{er.description}</ERTitle>
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
              </Form>
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
            <Button onClick={() => setTabIndex(tabIndex + 1)}>Próximo</Button>
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
            <Button onClick={() => setTabIndex(tabIndex + 1)}>Próximo</Button>
          </Options>
        )}
      </STabs>
    </Wrapper>
  );
};
