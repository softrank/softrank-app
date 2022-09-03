import { CapacityResponseDto } from 'shared/dtos/capacitiyResponseDto';
import { EvalutationDto } from 'shared/dtos/evaluationDto';
import { Evalutation } from 'shared/Types/evaluation';
import { EvaluationDetails } from 'shared/Types/evaluationDetails';
import { EvaluationProcess } from 'shared/Types/evaluationProcess';
import { EvalutionResponse } from 'shared/Types/evaluationResponse';
import { Improvement } from 'shared/Types/improvement';
import { Indicators } from 'shared/Types/indicators';
import { Process } from 'shared/Types/process';
import { requests } from './api';

const evaluationController: string = '/evaluation';

export const evaluationService = {
  create: (evaluation: EvalutationDto) =>
    requests.post<Evalutation>(evaluationController, evaluation),
  getById: (id: string) =>
    requests.get<EvaluationDetails>(`${evaluationController}/${id}`),
  getIndicators: (id: string) =>
    requests.get<Indicators>(`${evaluationController}/${id}/indicators`),
  getProcesses: (id: string) =>
    requests.get<EvaluationProcess[]>(
      `${evaluationController}/${id}/processes`
    ),
  list: () => requests.get<EvalutionResponse[]>(`${evaluationController}`),
  getImprovements: (id: string) =>
    requests.get<Improvement[]>(`${evaluationController}/${id}/adjustments`),
  get: () => requests.get<Evalutation[]>(`${evaluationController}`),
  uploadPlan: (evaluationId: string, plan: File) => {
    const formData = new FormData();
    formData.append('file', plan);
    return requests.postFile(
      `${evaluationController}/${evaluationId}/plans`,
      formData
    );
  },
  uploadInterview: (evaluationId: string, interview: File) => {
    const formData = new FormData();
    formData.append('file', interview);
    return requests.postFile(
      `${evaluationController}/${evaluationId}/interviews`,
      formData
    );
  },
  nextStep: (id: string) =>
    requests.putWithoutBody(`${evaluationController}/${id}/next-step`),
  getCapacities: (id: string, type: 'O' | 'P') =>
    requests.get<CapacityResponseDto[]>(
      `${evaluationController}/${id}/capacities?type=${type}`
    ),
  getOrganizationalProcesses: (id: string) =>
    requests.get<Process[]>(
      `${evaluationController}/${id}/organizational-proesses`
    ),
};
