import { Indicator } from 'shared/models/indicator';

export interface CapacityResponseDto {
  id: string;
  name: string;
  modelCapacityId: string;
  indicators: Indicator[];
  status?: string;
  projectAvaliations?: ProjectsAvaliation[];
  modelProcessAvaliations?: ProjectsAvaliation[];
}

interface ProjectsAvaliation {
  id: string;
  projectId: string;
  status: string;
  targetId: string;
}
interface ProjectsAvaliation {
  id: string;
  modelProcessId: string;
  status: string;
  targetId: string;
}
