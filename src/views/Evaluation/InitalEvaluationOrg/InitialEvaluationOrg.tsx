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
import { EvidenceDetails } from '../EvidenceDetails/EvidenceDetails';
import { File } from 'shared/components/File/File';
import { InputGroup } from 'shared/components/Form';
import { useParams } from 'react-router';
import { EvaluationProcess } from 'shared/models/evaluationProcess';
import { evaluationService } from 'shared/services';
import { LoadingScreen } from 'shared/components/Loading';
import { Title3 } from 'shared/components/Titles/Title3';

export const InitialEvaluationOrg = () => {
  const { id } = useParams<{ id: string }>();

  const [tabIndex, setTabIndex] = useState(0);
  const [processes, setProcesses] = useState<EvaluationProcess[]>();
  const [loading, setLoading] = useState(true);
  const [showEvidenceDetails, setShowEvidenceDetails] = useState(false);
  const [expectedResultId, setExpectedResultId] = useState<string>();

  useEffect(() => {
    evaluationService
      .getProcesses(id)
      .then((processes) => {
        setProcesses(processes);
        console.log(processes);

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  const addIndicatorHandler = (expectResultId: string) => {
    setExpectedResultId(expectedResultId);
    setShowEvidenceDetails(true);
  };

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando processos..." />
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
                    {process.expectedResults?.map((er, index) => (
                      <Collapse
                        title={er.initial}
                        options={
                          <AddIcon
                            $outline={true}
                            onClick={() => addIndicatorHandler(er.id)}
                          />
                        }
                        key={index}
                      >
                        <Title3>{er.description}</Title3>
                        <InputGroup>
                          <ReadOnly label="Projeto" value="Projeto 2" />
                          <File
                            label="Fonte de evidência"
                            path="Outro arquivo"
                          />
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
            <EvidenceDetails
              evaluationId={id}
              expectedResultId={expectedResultId}
              setShowModal={setShowEvidenceDetails}
            />
          </Modal>
        </Wrapper>
      )}
    </>
  );
};
