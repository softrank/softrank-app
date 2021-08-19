import { requests } from './api';
import { signDto } from 'shared/dtos/signDto';
import { User } from 'shared/models/user';

const authController: string = '/auth';

export const authService = {
  signin: (signIn: signDto) => requests.post<User>(authController, signIn),
};
