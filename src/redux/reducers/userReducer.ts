import { LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/types';

const initialState = {
  user: null,
  error: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload };
    case REGISTER_SUCCESS:
      return { ...state, user: action.payload };
    case REGISTER_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
