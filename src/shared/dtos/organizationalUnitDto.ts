export interface OrganizationDto {
  name: string;
  email: string;
  documentNumber: string;
  documentType: string;
  phone: string;
  projects: Project[];
  password: string;
}

interface Project {
  id: string;
  name: string;
}
