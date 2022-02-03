import { OrganizationDto } from 'shared/dtos/organizationalUnitDto';
import { Organization } from 'shared/models/organization';
import { requests } from './api';

const evaluatorInstitutionController: string = '/organizational-unit';

export const organizationalUnitService = {
  list: () => requests.get<Organization[]>(evaluatorInstitutionController),
  create: (organization: OrganizationDto) =>
    requests.post<Organization>(evaluatorInstitutionController, organization),
};
