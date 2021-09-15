import { requests } from './api';
import { signDto } from 'shared/dtos/signDto';

const authController: string = '/user/auth';

export const authService = {
  signin: (signIn: signDto) => requests.post<string>(authController, signIn),
};
