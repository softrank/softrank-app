export interface EvidencePCForm {
  id: string;
  name: string;
  qualityAssuranceGroup?: string;
  files: EvidencePCFormFile[];
}

export interface EvidencePCFormFile {
  id?: string;
  projectId: string;
  projectName: string;
  content?: File;
  checked: boolean;
}
