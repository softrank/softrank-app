import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  FlexSpace,
  Collapse,
  Title,
  Wrapper,
  Button,
  ReadOnly,
  Divider,
} from 'shared/components';
import { InputGroup, Radio, RadioContainer } from 'shared/components/Form';
import { ERTitle } from '../EvaluationDetails/styled';
import { STabs, STabList, STab, STabPanel } from 'shared/components/Tab/Tab';
import { modelDummy } from 'shared/data/modelDummy';
import { Process } from 'shared/models/process';
import { File } from 'shared/components/File/File';

export const InitialEvaluationTeam = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [processes, setProcesses] = useState<Process[]>();

  const {
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm<any>();

  useEffect(() => {
    setProcesses(modelDummy.modelProcesses);
  }, [processes]);

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
              <FlexSpace space="1rem">
                {process.expectedResults?.map((er, index) => {
                  return (
                    <Collapse title={er.initial}>
                      <ERTitle>{er.description}</ERTitle>
                      <Collapse title="Documento de requisitos" underline>
                        <InputGroup>
                          <ReadOnly label="Projeto" value="Projeto 2" />
                          <File
                            label="Fonte de evidência"
                            path="Outro arquivo"
                          />
                          <RadioContainer label="Status">
                            <Radio
                              name="status"
                              option="1"
                              control={control}
                              color="red"
                            />
                            <Radio
                              name="status"
                              option="2"
                              control={control}
                              color="yellow"
                            />
                            <Radio
                              name="status"
                              option="3"
                              control={control}
                              color="green"
                            />
                          </RadioContainer>
                        </InputGroup>
                        <Divider />
                      </Collapse>
                    </Collapse>
                  );
                })}
              </FlexSpace>
            </STabPanel>
          );
        })}
      </STabs>
      <Button secondary width="6rem" onClick={() => console.log('salvar')}>
        Salvar
      </Button>
    </Wrapper>
  );
};
