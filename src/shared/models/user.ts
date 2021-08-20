export interface User {
  id: string;
  login: string;
  passwordHash: string;
  recoveryToken: string;
  entityId: string;
}
