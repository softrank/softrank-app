import { useEffect, useState } from 'react';

import {
  FlexSpace,
  Collapse,
  Title,
  Wrapper,
  Button,
  AddIcon,
  Modal,
  STab,
  STabList,
  STabPanel,
  STabs,
  ReadOnly,
} from 'shared/components';
import { ERTitle } from '../EvaluationDetails/styled';
import { modelDummy } from 'shared/data/modelDummy';
import { Process } from 'shared/models/process';
import { EvidenceDetails } from '../EvidenceDetails/EvidenceDetails';
import { File } from 'shared/components/File/File';
import { InputGroup } from 'shared/components/Form';

interface Props {
  evaluationId: string;
}

export const InitialEvaluationOrg = ({ evaluationId }: Props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [processes, setProcesses] = useState<Process[]>();
  const [showEvidenceDetails, setShowEvidenceDetails] = useState(false);

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
                {process.expectedResults?.map((er, index) => (
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
                    <InputGroup>
                      <ReadOnly label="Projeto" value="Projeto 2" />
                      <File label="Fonte de evidência" path="Outro arquivo" />
                    </InputGroup>
                  </Collapse>
                ))}
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
