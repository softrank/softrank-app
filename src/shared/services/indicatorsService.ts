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
  createFile: (indicatorId: string, projectId: string, file: File) =>
    requests.post(
      `${indicatorsController}/${indicatorId}/file/${projectId}`,
      file
    ),
};
