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
  Modal,
  STab,
  STabList,
  STabPanel,
  STabs,
} from 'shared/components';
import { InputGroup, FileInput, Input } from 'shared/components/Form';
import { ERTitle } from '../EvaluationDetails/styled';
import { modelDummy } from 'shared/data/modelDummy';
import { Process } from 'shared/models/process';
import { EvidenceDetails } from '../EvidenceDetails/EvidenceDetails';

export const InitialEvaluationOrg = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [processes, setProcesses] = useState<Process[]>();
  const [showEvidenceDetails, setShowEvidenceDetails] = useState(false);

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
                          $outline={true}
                          onClick={() => setShowEvidenceDetails(true)}
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
                            $outline={true}
                            onClick={() => console.log('me add')}
                            $size="small"
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
      <Modal
        title="Fonte de evidência"
        showModal={showEvidenceDetails}
        setShowModal={setShowEvidenceDetails}
        width="90%"
        height="100%"
      >
        <EvidenceDetails setShowModal={setShowEvidenceDetails} />
      </Modal>
    </Wrapper>
  );
};
