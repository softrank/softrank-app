import { requests } from './api';

const evaluationIndicatorController: string = '/evaluation-indicator';

export const evaluationIndicatorService = {
  updateEr: (id: string, status: { status: string }) =>
    requests.put<any>(
      `${evaluationIndicatorController}/expected-result/${id}`,
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
};
