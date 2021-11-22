import { AuditorDto } from 'shared/dtos/auditorDto';
import { Auditor } from 'shared/models/auditor';
import { requests } from './api';

const auditorsController: string = '/auditors';

export const auditorService = {
  create: (auditor: AuditorDto) =>
    requests.post<Auditor>(auditorsController, auditor),
};
