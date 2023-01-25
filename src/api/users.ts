import { User } from '../types/User';
import { client } from '../utils/fetchClient';

export const getAllUsers = () => {
  return client.get<User[]>('/users').then(response => {
    if ('error' in response) {
      throw new Error();
    }

    return response;
  });
};