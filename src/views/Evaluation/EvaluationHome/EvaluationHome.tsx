import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
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
  Button,
} from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
import { evaluationService, evaluatorService } from 'shared/services';
import { OptionsContainer, TitleContainer } from './styled';
import checking from 'shared/assets/images/checking.svg';
import { ActionCardImage } from 'shared/components/ActionCardImage/ActionCardImage';
import { EvaluationDetails } from 'shared/Types/evaluationDetails';
import { RootState } from 'shared/store';
import { EvaluationPlanUpload } from './FileForms/EvaluationPlanUpload';
import { FileDisplay } from 'shared/components/FileDisplay/FileDisplay';
import { InterviewUpload } from './FileForms/InterviewUpload';
import { NextStepConfimationModal } from './FileForms/NextStepConfimationModal';
import { Process } from 'shared/Types/process';

export const EvaluationHome = () => {
  const [evaluation, setEvaluation] = useState<EvaluationDetails>();
  const [loading, setLoading] = useState(false);
  const [userRoles, setUserRoles] = useState<any[]>([]);
  const [evaluationPlanModal, setEvaluationPlanModal] = useState(false);
  const [interviewsModal, setInterviewsModal] = useState(false);
  const [nextStepModal, setNextStepModal] = useState(false);
  const [isLeader, setIsLeader] = useState<boolean>(false);
  const [organizationalProcesses, setOrganizationalProcesses] = useState<
    Process[]
  >([]);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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

  useEffect(() => {
    if (roles && evaluation) {
      evaluatorService.get().then((me) => {
        const leader = evaluation.evaluators.filter(
          (ev) => ev.type === 'evaluator_leader'
        );
        if (me.id === leader[0].memberId) setIsLeader(true);
      });
    }
  }, [roles, evaluation]);

  useEffect(() => loadEvaluation(id!), [id]);

  useEffect(() => {
    if (id)
      evaluationService
        .getOrganizationalProcesses(id)
        .then((processes) => setOrganizationalProcesses(processes));
  }, [id]);

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
            <SubTitle>Atividades</SubTitle>
            <Divider />
          </div>
          <OptionsContainer>
            <ActionCardImage
              title="Planilha de indicadores"
              onClick={() =>
                navigate(`/avaliacao/planilha-de-requisitos/${id}`)
              }
              src={checking}
              alt="Planilha de indicadores"
            />
            <ActionCard
              onClick={() => navigate(`/relatorio-de-melhorias/${id}`)}
              title="Relatório de melhorias"
              icon="list"
            />
          </OptionsContainer>
          <OptionsContainer>
            <ActionCard
              onClick={() =>
                navigate(`/avaliacao/capacidades-de-projeto/${id}`)
              }
              title="Capacidades de projeto"
              icon="evaluation"
            />
            {organizationalProcesses.length > 0 && (
              <ActionCard
                onClick={() =>
                  navigate(`/avaliacao/capacidades-organizacionais/${id}`)
                }
                title="Capacidades organizacionais"
                icon="report"
              />
            )}
          </OptionsContainer>
          {isLeader && (
            <OptionsContainer>
              <ActionCard
                onClick={() => navigate(`/avaliacao/resultados-final/${id}`)}
                title="Resultados da avaliação final"
                icon="report"
              />
            </OptionsContainer>
          )}
          {userRoles.includes('evaluator') && (
            <FlexSpace>
              <div>
                <TitleContainer>
                  <SubTitle>Plano de avaliação</SubTitle>
                  {evaluation?.state === 'Avaliação inicial' && (
                    <AddIcon onClick={() => setEvaluationPlanModal(true)} />
                  )}
                </TitleContainer>
                <Divider />
                {!!evaluation?.plan?.name && (
                  <FileDisplay
                    fileName={evaluation?.plan?.name}
                    url={evaluation?.plan.source ?? ''}
                  />
                )}
              </div>
              <div>
                <TitleContainer>
                  <SubTitle>Entrevistas</SubTitle>
                  {evaluation?.state === 'Avaliação inicial' && (
                    <AddIcon onClick={() => setInterviewsModal(true)} />
                  )}
                </TitleContainer>
                <Divider />
                {!!evaluation?.interviews[0]?.id && (
                  <FlexSpace direction="row">
                    {evaluation.interviews.map((interview, index) => {
                      return (
                        <FileDisplay
                          key={index}
                          fileName={interview.name}
                          url={interview.source}
                        />
                      );
                    })}
                  </FlexSpace>
                )}
              </div>
              {isLeader && (
                <div>
                  <Button
                    secondary
                    width="100%"
                    onClick={() => setNextStepModal(true)}
                  >
                    {`Finalizar ${evaluation?.state.toLowerCase()}`}
                  </Button>
                </div>
              )}
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
          evaluationId={id!}
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
          evaluationId={id!}
          loadEvaluation={loadEvaluation}
        />
      </Modal>
      <Modal
        title="Encerrar etapa"
        showModal={nextStepModal}
        setShowModal={setNextStepModal}
        width="60%"
        height="100%"
      >
        <NextStepConfimationModal
          nextStepModal={setNextStepModal}
          evaluationId={id!}
          loadEvaluation={loadEvaluation}
          setShowModal={setNextStepModal}
        />
      </Modal>
    </>
  );
};
