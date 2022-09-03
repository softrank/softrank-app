import { useEffect, useState } from 'react';

import { Modal, Table, Title, ViewIcon, Wrapper } from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
import { Evalutation } from 'shared/Types/evaluation';
import { evaluationService } from 'shared/services';
import { EvaluationApprovalDetails } from './EvaluationApprovalDetails';

export const ModelManagerEvaluationList = () => {
  const [evaluations, setEvaluations] = useState<Evalutation[]>([]);
  const [loading, setLoading] = useState(true);
  const [showEvaluationModal, setShowEvaluationModal] = useState(false);
  const [evaluationId, setEvaluationId] = useState<string>('');

  const handleEvaluationDetailsModal = (evaluationId: string) => {
    setShowEvaluationModal(true);
    setEvaluationId(evaluationId);
  };

  const loadEvaluations = () => {
    setLoading(true);
    evaluationService
      .get()
      .then((evaluations) => {
        setEvaluations(evaluations);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => loadEvaluations(), []);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando avaliações..." />
      ) : (
        <Wrapper>
          <Title>Avaliações</Title>
          <Table
            headers={['Nome', 'Estado', 'Organização', 'Nível', 'Aprovação']}
          >
            {evaluations.map((evaluation, id) => {
              return (
                <tr key={id}>
                  <td>{evaluation.name}</td>
                  <td>{evaluation.state}</td>
                  <td>{evaluation.organizationalUnit.name}</td>
                  <td>{evaluation.modelLevel.initial}</td>
                  <td>
                    <ViewIcon
                      onClick={() =>
                        handleEvaluationDetailsModal(evaluation.id)
                      }
                    />
                  </td>
                </tr>
              );
            })}
          </Table>
        </Wrapper>
      )}
      <Modal
        title="Detalhes da avaliação"
        showModal={showEvaluationModal}
        setShowModal={setShowEvaluationModal}
        width="80%"
        height="auto"
      >
        <EvaluationApprovalDetails
          evaluationId={evaluationId}
          cancelOption={setShowEvaluationModal}
          loadEvaluations={loadEvaluations}
        />
      </Modal>
    </>
  );
};
