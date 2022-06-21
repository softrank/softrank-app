import { IndicatorDto } from 'shared/dtos/indicatorDto';
import { Indicator } from 'shared/models/indicator';
import { requests } from './api';

const indicatorsController: string = '/indicator';

export const indicatorsService = {
  create: (expectedResultId: string) =>
    requests.postWithoutBody<Indicator>(
      `${indicatorsController}/${expectedResultId}`
    ),
  update: (indicator: IndicatorDto, id: string) =>
    requests.put<Indicator>(`${indicatorsController}/${id}`, indicator),
  delete: (id: string) => requests.del(`${indicatorsController}/${id}`),
  createFile: (indicatorId: string, projectId: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return requests.postFile(
      `${indicatorsController}/${indicatorId}/file/${projectId}`,
      formData
    );
  },
  updateStatus: (indicatorId: string, status: string) => {
    requests.put(`${indicatorsController}/${indicatorId}`, status);
  },
  getIndicatorById: (id: string) =>
    requests.get<Indicator>(`${indicatorsController}/${id}`),
};
