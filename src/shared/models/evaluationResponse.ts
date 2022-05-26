export interface EvalutionResponse {
  id: string;
  modelLevel: ModelLevelResponse;
  name: string;
  organizationalUnit: OrganizationalUnitResponse;
  state: string;
}

interface ModelLevelResponse {
  id: string;
  initial: string;
  modelId: string;
  modelName: string;
}

interface OrganizationalUnitResponse {
  id: string;
  name: string;
}
