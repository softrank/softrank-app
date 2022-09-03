import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import {
  AddIcon,
  Divider,
  EditIcon,
  FlexSpace,
  RemoveIcon,
  Table,
  Title,
  ViewIcon,
  Wrapper,
} from 'shared/components';
import { LoadingScreen } from 'shared/components/Loading';
import { EvaluationDetails } from 'shared/Types/evaluationDetails';
import { Improvement } from 'shared/Types/improvement';
import { evaluationService } from 'shared/services';
import { RootState } from 'shared/store';
import { ImprovementDetails } from './ImprovementDetails';
import { ImprovementView } from './ImprovementView';
import { IconOptions, LongTableLine, TextWrapper } from './styled';

export const ImprovementsReport = () => {
  const [evaluation, setEvaluation] = useState<EvaluationDetails>();
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [improvements, setImprovements] = useState<Improvement[]>([]);
  const [userRoles, setUserRoles] = useState<any[]>([]);
  const [viewImprovement, setViewImprovement] = useState<Improvement>();
  const [showView, setShowView] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [editImprovement, setEditImprovement] = useState<Improvement>();

  const { id } = useParams<{ id: string }>();
  const roles = useSelector<RootState>((state) => state.auth.roles);

  useEffect(() => {
    const rolesArray: any[] = roles as any[];
    setUserRoles(rolesArray);
  }, [roles]);

  useEffect(() => {
    evaluationService
      .getById(id!)
      .then((evaluation) => setEvaluation(evaluation));
    loadImprovements(id!);
    setLoading(false);
  }, [id]);

  const loadImprovements = (id: string) => {
    evaluationService.getImprovements(id).then((improvements) => {
      setImprovements(improvements);
    });
  };

  const handleViewImprovement = (
    improvement: Improvement,
    editState: boolean
  ) => {
    setViewImprovement(improvement);
    setCanEdit(editState);
    setShowView(true);
  };

  const handleEditImprovement = (improvement?: Improvement) => {
    setEditImprovement(improvement);
    setShowDetails(true);
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
                <AddIcon onClick={() => handleEditImprovement(undefined)} />
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
                              <EditIcon
                                onClick={() =>
                                  handleEditImprovement(improvement)
                                }
                              />
                              <RemoveIcon />
                            </>
                          )}
                        {evaluation?.state === 'Avaliação final' &&
                          userRoles.includes('organizationalUnit') && (
                            <EditIcon
                              onClick={() =>
                                handleViewImprovement(improvement, true)
                              }
                            />
                          )}
                        <ViewIcon
                          onClick={() =>
                            handleViewImprovement(improvement, false)
                          }
                        />
                      </IconOptions>
                    </td>
                  </tr>
                );
              })}
            </Table>
          </FlexSpace>
          <ImprovementDetails
            showModal={showDetails}
            setShowModal={setShowDetails}
            evaluationId={id!}
            loadImprovements={loadImprovements}
            improvement={editImprovement}
          />
          <ImprovementView
            showModal={showView}
            setShowModal={setShowView}
            improvement={viewImprovement}
            evaluationState={evaluation?.state}
            canEdit={canEdit}
          />
        </Wrapper>
      )}
    </>
  );
};
