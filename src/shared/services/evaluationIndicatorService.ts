import { requests } from './api';

const evaluationIndicatorController: string = '/evaluation-indicator';

export const evaluationIndicatorService = {
  updateEr: (id: string, status: { status: string }) =>
    requests.put<any>(
      `${evaluationIndicatorController}/expected-result/${id}`,
      status
    ),
  updateCp: (id: string, status: { status: string }) =>
    requests.put<any>(
      `${evaluationIndicatorController}/model-capacity/${id}`,
      status
    ),
  postErProject: (
    id: string,
    body: { evaluationProjectId: string; status: string }
  ) =>
    requests.post<any>(
      `${evaluationIndicatorController}/expected-result/${id}/project-avaliation`,
      body
    ),
  postCpToTarget: (
    capacityId: string,
    body: { targetId: string; status: string }
  ) =>
    requests.post<any>(
      `${evaluationIndicatorController}/model-capacity/${capacityId}/target-avaliation`,
      body
    ),
};
