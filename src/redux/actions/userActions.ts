import { LOGIN_REQUEST, REGISTER_REQUEST } from './types';

export const loginRequest = (email: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
});

export const registerRequest = (user: { firstName: string; lastName: string; email: string; password: string; imageUrl: string }) => ({
  type: REGISTER_REQUEST,
  payload: user,
});
