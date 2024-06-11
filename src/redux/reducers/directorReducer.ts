import { FETCH_DIRECTORS_SUCCESS, FETCH_DIRECTORS_FAILURE, FETCH_DIRECTOR_SUCCESS, FETCH_DIRECTOR_FAILURE, CREATE_DIRECTOR_SUCCESS, CREATE_DIRECTOR_FAILURE } from '../actions/types';

const initialState = {
  directors: [],
  director: null,
  error: null,
};

const directorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DIRECTORS_SUCCESS:
      return { ...state, directors: action.payload };
    case FETCH_DIRECTORS_FAILURE:
      return { ...state, error: action.payload };
    case FETCH_DIRECTOR_SUCCESS:
      return { ...state, director: action.payload };
    case FETCH_DIRECTOR_FAILURE:
      return { ...state, error: action.payload };
    case CREATE_DIRECTOR_SUCCESS:
      return { ...state, directors: [...state.directors, action.payload] };
    case CREATE_DIRECTOR_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default directorReducer;
