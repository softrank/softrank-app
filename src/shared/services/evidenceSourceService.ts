import { EvidenceSourceStatusDto } from 'shared/dtos/evidenceSourceStatusDto';
import { requests } from './api';

const evidenceSourcesController: string = '/evidence-source';

export const evidenceSourcesService = {
  delete: (id: string) => requests.del(`${evidenceSourcesController}/${id}`),
  updateStatus: (evidenceId: string, status: EvidenceSourceStatusDto) => {
    requests.put(`${evidenceSourcesController}/${evidenceId}`, status);
  },
};
