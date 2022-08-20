import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import {
  FlexSpace,
  Collapse,
  Title,
  Wrapper,
  Button,
  AddIcon,
  RemoveIcon,
  ReadOnly,
  FileDisplay,
} from 'shared/components';
import { evaluationService } from 'shared/services';
import { LoadingScreen } from 'shared/components/Loading';
import { CapacityResponseDto } from 'shared/dtos/capacitiyResponseDto';
import { EvidencePCDetails } from './EvidencePCDetails/EvidencePCDetails';
import { InputGroup } from 'shared/components/Form';
import { DeleteConfirmationMessage } from 'shared/components/Messages/DeleteConfirmationMessage/DeleteConfirmationMessage';
import { indicatorsService } from 'shared/services/indicatorsService';

export const ProjectCapacitiesManagmentOrg = () => {
  const [loading, setLoading] = useState(true);
  const [capacities, setCapacities] = useState<CapacityResponseDto[]>();
  const [addEvidence, setAddEvidence] = useState(false);
  const [capacityId, setCapacityId] = useState<string>();
  const [deleteIndicatorModal, setDeleteIndicatorModal] = useState(false);
  const [deleteIndicatorId, setDeleteIndicatorId] = useState('');

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const loadCapacities = () => {
    setLoading(true);
    evaluationService
      .getCapacities(id!, 'P')
      .then((capacities) => setCapacities(capacities))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    loadCapacities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddEvidence = (capacityId: string) => {
    setCapacityId(capacityId);
    setAddEvidence(true);
  };

  const handleDeleteIndicator = (indicatorId: string) => {
    setDeleteIndicatorModal(true);
    setDeleteIndicatorId(indicatorId);
  };

  const deleteIndicator = () => {
    if (deleteIndicatorId)
      indicatorsService.delete(deleteIndicatorId).then(() => loadCapacities());
    setDeleteIndicatorModal(false);
    setDeleteIndicatorId('');
  };

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando processos..." />
      ) : (
        <Wrapper>
          <Title>Capacidades de Processo de Projeto</Title>
          <FlexSpace space="1rem">
            {capacities?.map((capacity, index) => {
              return (
                <Collapse
                  title={capacity.name}
                  options={
                    <AddIcon
                      $outline={true}
                      onClick={() => handleAddEvidence(capacity.id)}
                    />
                  }
                  key={index}
                >
                  {capacity.indicators.map((indicator, indexInd) => {
                    return (
                      <Collapse
                        title={indicator.name}
                        options={
                          <RemoveIcon
                            $outline={true}
                            onClick={() => handleDeleteIndicator(indicator.id)}
                          />
                        }
                        key={indexInd}
                        underline
                      >
                        {indicator.evidenceSources?.map(
                          (evidenceSource, indexFile: number) => (
                            <InputGroup key={indexFile}>
                              <ReadOnly
                                label="Projeto"
                                value={evidenceSource.project?.name ?? ''}
                              />
                              <FileDisplay
                                label="Arquivo"
                                fileName={evidenceSource.files[0].name}
                                url={evidenceSource.files[0].source}
                              />
                            </InputGroup>
                          )
                        )}
                      </Collapse>
                    );
                  })}
                </Collapse>
              );
            })}
          </FlexSpace>
          <Button
            secondary
            width="6rem"
            onClick={() => navigate(`/avaliacao/home/${id}`)}
          >
            Voltar
          </Button>
          <DeleteConfirmationMessage
            showConfirmation={deleteIndicatorModal}
            setShowConfirmation={setDeleteIndicatorModal}
            confirmAction={deleteIndicator}
          />
          <EvidencePCDetails
            showModal={addEvidence}
            setShowModal={setAddEvidence}
            evaluationId={id!}
            capacityId={capacityId}
            loadCapacities={loadCapacities}
          />
        </Wrapper>
      )}
    </>
  );
};
