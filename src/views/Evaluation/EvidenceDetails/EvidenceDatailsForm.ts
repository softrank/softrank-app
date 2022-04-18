export interface EvidenceDetailsForm {
  name: string;
  group: string;
  projects: Project[];
  projectFile: any[];
}

interface Project {
  checked: boolean;
}
