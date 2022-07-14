export interface EvidenceOCForm {
  id: string;
  name: string;
  qualityAssuranceGroup?: string;
  files: EvidenceOCFormFile[];
}

export interface EvidenceOCFormFile {
  id?: string;
  processId: string;
  processName: string;
  content?: File;
  checked: boolean;
}
