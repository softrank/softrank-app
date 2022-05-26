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
  EditIcon,
  RemoveIcon,
} from 'shared/components';
import { EvidenceDetails } from '../EvidenceDetails/EvidenceDetails';
import { File } from 'shared/components/File/File';
import { InputGroup } from 'shared/components/Form';
import { useParams } from 'react-router';
import { EvaluationProcess } from 'shared/models/evaluationProcess';
import { evaluationService } from 'shared/services';
import { LoadingScreen } from 'shared/components/Loading';
import { Title3 } from 'shared/components/Titles/Title3';
import { DeleteConfirmationModal } from './DeleteConfirmationModal/DeleteConfirmationModal';
import { indicatorsService } from 'shared/services/indicatorsService';

export const InitialEvaluationOrg = () => {
  const { id } = useParams<{ id: string }>();

  const [tabIndex, setTabIndex] = useState(0);
  const [processes, setProcesses] = useState<EvaluationProcess[]>();
  const [loading, setLoading] = useState(true);
  const [showEvidenceDetails, setShowEvidenceDetails] = useState(false);
  const [expectedResultId, setExpectedResultId] = useState<string>('');
  const [indicatorId, setIndicatorId] = useState<string | undefined>();
  const [deleteIndicatorModal, setDeleteIndicatorModal] = useState(false);
  const [deleteIndicatorId, setDeleteIndicatorId] = useState('');

  useEffect(() => loadProcesses(id), [id]);

  const addIndicatorHandler = (
    expectResultId: string,
    indicatorId?: string
  ) => {
    if (indicatorId) {
      setIndicatorId(indicatorId);
    } else {
      setIndicatorId(undefined);
    }
    setExpectedResultId(expectResultId);
    setShowEvidenceDetails(true);
  };

  const handleConfirmationModal = (indicatorId: string) => {
    setDeleteIndicatorModal(true);
    setDeleteIndicatorId(indicatorId);
  };

  const deleteIndicator = () => {
    if (deleteIndicatorId !== '')
      indicatorsService.delete(deleteIndicatorId).then(() => loadProcesses(id));
    setDeleteIndicatorModal(false);
    setDeleteIndicatorId('');
  };

  const loadProcesses = (id: string) => {
    setLoading(true);
    evaluationService
      .getProcesses(id)
      .then((processes) => {
        setProcesses(processes);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
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
                    {process.expectedResults?.map((er, indexEr) => (
                      <Collapse
                        title={er.initial}
                        options={
                          <AddIcon
                            $outline={true}
                            onClick={() => addIndicatorHandler(er.id)}
                          />
                        }
                        key={indexEr}
                      >
                        <Title3>{er.description}</Title3>
                        <FlexSpace space="1rem">
                          {er.indicators?.map((indicator, indexIndicator) => (
                            <Collapse
                              title={indicator.name}
                              options={
                                <>
                                  <RemoveIcon
                                    $outline={true}
                                    onClick={() =>
                                      handleConfirmationModal(indicator.id)
                                    }
                                  />
                                  <EditIcon
                                    $outline={true}
                                    onClick={() =>
                                      addIndicatorHandler(er.id, indicator.id)
                                    }
                                  />
                                </>
                              }
                              key={indexIndicator}
                              underline
                            >
                              {indicator.evidenceSources?.map(
                                (evidenceSource, indexFile: number) => (
                                  <InputGroup key={indexFile}>
                                    <ReadOnly
                                      label="Projeto"
                                      value={evidenceSource.project.name}
                                    />
                                    <File
                                      label="Arquivo"
                                      fileName={evidenceSource.files[0].name}
                                      url={evidenceSource.files[0].source}
                                    />
                                  </InputGroup>
                                )
                              )}
                            </Collapse>
                          ))}
                        </FlexSpace>
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
              indicatorId={indicatorId}
              setShowModal={setShowEvidenceDetails}
              loadProcesses={loadProcesses}
            />
          </Modal>
          <DeleteConfirmationModal
            showConfirmation={deleteIndicatorModal}
            setShowConfirmation={setDeleteIndicatorModal}
            confirmAction={deleteIndicator}
          />
        </Wrapper>
      )}
    </>
  );
};
