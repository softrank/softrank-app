import { Indicator } from 'shared/models/indicator';
import { requests } from './api';

const indicatorsController: string = '/indicator';

export const indicatorsService = {
  create: (expectedResultId: string) =>
    requests.postWithoutBody<Indicator>(
      `${indicatorsController}/${expectedResultId}`
    ),
};
