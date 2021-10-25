import { requests } from './api';
import { signDto } from 'shared/dtos/signDto';

const userController: string = '/users';

export const userService = {
  signin: (signIn: signDto) =>
    requests.post<string>(`${userController}/auth`, signIn),
  details: (id: string) => requests.get<any>(`${userController}/me`),
};
