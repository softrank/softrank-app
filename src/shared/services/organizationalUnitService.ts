import { Organization } from 'shared/Types/organization';
import { IOrganizationRegister } from 'shared/Types/organizationRegister';
import { requests } from './api';

const evaluatorInstitutionController: string = '/organizational-unit';

export const organizationalUnitService = {
  list: () => requests.get<Organization[]>(evaluatorInstitutionController),
  create: (organization: IOrganizationRegister) =>
    requests.post<Organization>(evaluatorInstitutionController, organization),
};
