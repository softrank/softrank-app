import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  AddIcon,
  Button,
  Collapse,
  FileDisplay,
  FlexSpace,
  ReadOnly,
  RemoveIcon,
  Title,
  Wrapper,
} from 'shared/components';
import { InputGroup } from 'shared/components/Form';
import { LoadingScreen } from 'shared/components/Loading';
import { DeleteConfirmationMessage } from 'shared/components/Messages/DeleteConfirmationMessage/DeleteConfirmationMessage';

import { CapacityResponseDto } from 'shared/dtos/capacitiyResponseDto';
import { evaluationService } from 'shared/services';
import { indicatorsService } from 'shared/services/indicatorsService';
import { EvidenceOCDetails } from './EvidenceOCDetails/EvidenceOCDetails';

export const OrganizationCapacitiesManagmentOrg = () => {
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
      .getCapacities(id!, 'O')
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
          <Title>Capacidades de Processos - Organizacional</Title>
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
                                label="Processo"
                                value={evidenceSource.modelProcess?.name ?? ''}
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
          <EvidenceOCDetails
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
