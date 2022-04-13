import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  FlexSpace,
  Collapse,
  Title,
  Wrapper,
  Button,
  AddIcon,
  RemoveIcon,
} from 'shared/components';
import { InputGroup, FileInput, Input } from 'shared/components/Form';
import { ERTitle } from '../EvaluationDetails/styled';
import { STabs, STabList, STab, STabPanel } from 'shared/components/Tab/Tab';
import { modelDummy } from 'shared/data/modelDummy';
import { Process } from 'shared/models/process';

export const InitialEvaluationOrg = () => {
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
                    <Collapse
                      title={er.initial}
                      options={
                        <AddIcon
                          outline={true}
                          onClick={() => console.log('me add')}
                        />
                      }
                      key={index}
                    >
                      <ERTitle>{er.description}</ERTitle>
                      <Collapse
                        title="Fonte de evidência - 1"
                        underline
                        options={
                          <RemoveIcon
                            outline={true}
                            onClick={() => console.log('me add')}
                            size="small"
                          />
                        }
                      >
                        <InputGroup>
                          <Input
                            label="Fonte de evidência"
                            name="evidenceSource"
                            placeholder="nome da fonte de evidência"
                            control={control}
                            rules={{
                              required: true,
                            }}
                            errors={errors?.name}
                          />
                          <Input
                            label="Grupo de garantia da qualidade"
                            name="evidenceSource"
                            placeholder="nome do grupo"
                            control={control}
                            rules={{
                              required: true,
                            }}
                            errors={errors?.name}
                          />
                        </InputGroup>
                        <InputGroup>
                          <FileInput
                            label="Projeto 1"
                            name="file"
                            control={control}
                            rules={{ required: true }}
                            errors={errors?.evaluationPlan}
                            reset={reset}
                            getValues={getValues}
                          />
                          <FileInput
                            label="Projeto 2"
                            name="file"
                            control={control}
                            rules={{ required: true }}
                            errors={errors?.evaluationPlan}
                            reset={reset}
                            getValues={getValues}
                          />
                          <FileInput
                            label="Projeto 3"
                            name="file"
                            control={control}
                            rules={{ required: true }}
                            errors={errors?.evaluationPlan}
                            reset={reset}
                            getValues={getValues}
                          />
                          <FileInput
                            label="Projeto 4"
                            name="file"
                            control={control}
                            rules={{ required: true }}
                            errors={errors?.evaluationPlan}
                            reset={reset}
                            getValues={getValues}
                          />
                        </InputGroup>
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
