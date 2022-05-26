export interface EvidenceDetailsForm {
  id: string;
  name: string;
  qualityAssuranceGroup?: string;
  files: EvidenceDetailsFormFile[];
}

export interface EvidenceDetailsFormFile {
  id?: string;
  projectId: string;
  projectName: string;
  content?: File;
  checked: boolean;
}
