import { FETCH_DIRECTORS_REQUEST, FETCH_DIRECTOR_REQUEST, CREATE_DIRECTOR_REQUEST } from './types';

export const fetchDirectorsRequest = () => ({
  type: FETCH_DIRECTORS_REQUEST,
});

export const fetchDirectorRequest = (id: string) => ({
  type: FETCH_DIRECTOR_REQUEST,
  payload: id,
});

export const createDirectorRequest = (director: { firstName: string; lastName: string }) => ({
  type: CREATE_DIRECTOR_REQUEST,
  payload: director,
});
