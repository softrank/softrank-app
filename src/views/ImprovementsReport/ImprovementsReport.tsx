import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
import { EvaluationDetails } from 'shared/models/evaluationDetails';
import { Improvement } from 'shared/models/improvement';
import { evaluationService } from 'shared/services';
import { RootState } from 'shared/store';
import { ImprovementDetails } from './ImprovementDetails';
import { IconOptions, LongTableLine, TextWrapper } from './styled';

export const ImprovementsReport = () => {
  const [evaluation, setEvaluation] = useState<EvaluationDetails>();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [improvements, setImprovements] = useState<Improvement[]>([]);
  const [userRoles, setUserRoles] = useState<any[]>([]);

  const { id } = useParams<{ id: string }>();
  const roles = useSelector<RootState>((state) => state.auth.roles);

  useEffect(() => {
    const rolesArray: any[] = roles as any[];
    setUserRoles(rolesArray);
  }, [roles]);

  useEffect(() => {
    evaluationService
      .getById(id)
      .then((evaluation) => setEvaluation(evaluation));
    loadImprovements(id);
    setLoading(false);
  }, [id]);

  const loadImprovements = (id: string) => {
    evaluationService
      .getImprovements(id)
      .then((improvements) => setImprovements(improvements));
  };

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
              {userRoles.includes('evaluator') && (
                <AddIcon onClick={() => setShowModal(true)} />
              )}
            </TextWrapper>
            <Divider />
            <Table
              headers={['Processo', 'RE', 'Problema', 'Sugestão', 'Ações']}
            >
              {improvements.map((improvement, index) => {
                return (
                  <tr key={index}>
                    <LongTableLine>
                      {improvement.expectedResult.modelProcess.initial}
                    </LongTableLine>
                    <LongTableLine>
                      {improvement.expectedResult.initial}
                    </LongTableLine>
                    <LongTableLine>{improvement.problem}</LongTableLine>
                    <LongTableLine>{improvement.suggestion}</LongTableLine>
                    <td>
                      <IconOptions>
                        {evaluation?.state === 'Avaliação inicial' &&
                          userRoles.includes('evaluator') && (
                            <>
                              <EditIcon />
                              <RemoveIcon />
                            </>
                          )}
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
            <ImprovementDetails
              setShowModal={setShowModal}
              evaluationId={id}
              loadImprovements={loadImprovements}
            />
          </Modal>
        </Wrapper>
      )}
    </>
  );
};
