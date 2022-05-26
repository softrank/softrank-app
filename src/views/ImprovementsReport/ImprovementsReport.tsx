import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import {
  AddIcon,
  Divider,
  EditIcon,
  FlexSpace,
  Modal,
  RemoveIcon,
  Table,
  Title,
  Wrapper,
} from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
import { Evalutation } from 'shared/models/evaluation';
import { Improvement } from 'shared/models/improvement';
import { evaluationService, evaluatorService } from 'shared/services';
import { ImprovementDetails } from './ImprovementDetails';
import { IconOptions, LongTableLine, TextWrapper } from './styled';

export const ImprovementsReport = () => {
  const [evaluation, setEvaluation] = useState<Evalutation>();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [improvements, setImprovements] = useState<Improvement[]>([]);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    evaluatorService
      .getEvaluations()
      .then((evaluations) => setEvaluation(evaluations[0]));
    evaluationService
      .getImprovements(id)
      .then((improvements) => setImprovements(improvements));
    setLoading(false);
  }, [id]);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando avaliação..." />
      ) : (
        <Wrapper>
          <Title>Relatório de melhorias</Title>
          <FlexSpace space="6px">
            <TextWrapper>
              <p>
                Unidade Organizacional Avaliada:{' '}
                {evaluation?.organizationalUnit.name}
              </p>
              <AddIcon onClick={() => setShowModal(true)} />
            </TextWrapper>
            <Divider />
            <Table
              headers={[
                'Processo',
                'RE',
                'Categoria',
                'Problema',
                'Sugestão',
                'Ações',
              ]}
            >
              {improvements.map((improvement, index) => {
                return (
                  <tr key={index}>
                    <LongTableLine>{improvement.problem}</LongTableLine>
                    <LongTableLine>{improvement.suggestion}</LongTableLine>
                    <td>{improvement.type}</td>
                    <td>
                      <IconOptions>
                        <EditIcon />
                        <RemoveIcon />
                      </IconOptions>
                    </td>
                  </tr>
                );
              })}
            </Table>
          </FlexSpace>
          <Modal
            title="Adicionar melhoria"
            showModal={showModal}
            setShowModal={setShowModal}
            width="80%"
            height="100%"
          >
            <ImprovementDetails setShowModal={setShowModal} evaluationId={id} />
          </Modal>
        </Wrapper>
      )}
    </>
  );
};
