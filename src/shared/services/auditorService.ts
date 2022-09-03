import { AuditorDto } from 'shared/dtos/auditorDto';
import { Auditor } from 'shared/Types/auditor';
import { requests } from './api';

const auditorsController: string = '/auditors';

export const auditorService = {
  create: (auditor: AuditorDto) =>
    requests.post<Auditor>(auditorsController, auditor),
  list: () => requests.get<Auditor[]>(auditorsController),
};
