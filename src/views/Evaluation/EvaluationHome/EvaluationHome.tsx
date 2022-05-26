import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useSelector } from 'react-redux';

import {
  Wrapper,
  Title,
  Divider,
  SubTitle,
  ActionCard,
  AddIcon,
  Modal,
  FlexSpace,
} from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
import { evaluationService } from 'shared/services';
import { OptionsContainer, TitleContainer } from './styled';
import checking from 'shared/assets/images/checking.svg';
import { ActionCardImage } from 'shared/components/ActionCardImage/ActionCardImage';
import { EvaluationDetails } from 'shared/models/evaluationDetails';
import { RootState } from 'shared/store';
import { EvaluationPlanUpload } from './FileForms/EvaluationPlanUpload';
import { File } from 'shared/components/File/File';
import { InterviewUpload } from './FileForms/InterviewUpload';

export const EvaluationHome = () => {
  const [evaluation, setEvaluation] = useState<EvaluationDetails>();
  const [loading, setLoading] = useState(false);
  const [userRoles, setUserRoles] = useState<any[]>([]);
  const [evaluationPlanModal, setEvaluationPlanModal] = useState(false);
  const [interviewsModal, setInterviewsModal] = useState(false);

  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const roles = useSelector<RootState>((state) => state.auth.roles);

  const loadEvaluation = (id: string) => {
    setLoading(true);
    evaluationService
      .getById(id)
      .then((evaluation) => setEvaluation(evaluation));
    setLoading(false);
  };

  useEffect(() => {
    const rolesArray: any[] = roles as any[];
    setUserRoles(rolesArray);
  }, [roles]);

  useEffect(() => loadEvaluation(id), [id]);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} content="Carregando avaliação..." />
      ) : (
        <Wrapper>
          <TitleContainer>
            <Title>{evaluation?.name}</Title>
          </TitleContainer>
          <TitleContainer>
            <SubTitle>
              Organização: {evaluation?.organizationalUnit?.name}
            </SubTitle>
            <SubTitle>{evaluation?.state}</SubTitle>
          </TitleContainer>
          <div>
            <SubTitle>Ações</SubTitle>
            <Divider />
          </div>
          <OptionsContainer>
            <ActionCardImage
              title="Planilha de indicadores"
              onClick={() =>
                history.push(`/avaliacao/planilha-de-requisitos/${id}`)
              }
              src={checking}
              alt="Planilha de indicadores"
            />
            <ActionCard
              onClick={() => history.push(`/relatorio-de-melhorias/${id}`)}
              title="Relatório de melhorias"
              icon="report"
            />
          </OptionsContainer>
          {userRoles.includes('evaluator') && (
            <FlexSpace>
              <div>
                <TitleContainer>
                  <SubTitle>Plano de avaliação</SubTitle>
                  <AddIcon onClick={() => setEvaluationPlanModal(true)} />
                </TitleContainer>
                <Divider />
                {!!evaluation?.plan?.name && (
                  <File
                    fileName={evaluation?.plan?.name}
                    url={evaluation?.plan.source ?? ''}
                  />
                )}
              </div>
              <div>
                <TitleContainer>
                  <SubTitle>Entrevistas</SubTitle>
                  <AddIcon onClick={() => setInterviewsModal(true)} />
                </TitleContainer>
                <Divider />
                {!!evaluation?.interviews[0]?.id && (
                  <FlexSpace direction="row">
                    {evaluation.interviews.map((interview, index) => {
                      return (
                        <File
                          key={index}
                          fileName={interview.name}
                          url={interview.source}
                        />
                      );
                    })}
                  </FlexSpace>
                )}
              </div>
            </FlexSpace>
          )}
        </Wrapper>
      )}
      <Modal
        title="Upload do plano"
        showModal={evaluationPlanModal}
        setShowModal={setEvaluationPlanModal}
        width="60%"
        height="100%"
      >
        <EvaluationPlanUpload
          setShowModal={setEvaluationPlanModal}
          evaluationId={id}
          loadEvaluation={loadEvaluation}
        />
      </Modal>
      <Modal
        title="Upload da(s) entrevista(s)"
        showModal={interviewsModal}
        setShowModal={setInterviewsModal}
        width="60%"
        height="100%"
      >
        <InterviewUpload
          setShowModal={setInterviewsModal}
          evaluationId={id}
          loadEvaluation={loadEvaluation}
        />
      </Modal>
    </>
  );
};
