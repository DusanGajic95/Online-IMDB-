import userReducer from './userReducer';
import movieReducer from './movieReducer';
import directorReducer from './directorReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  movies: movieReducer,
  directors: directorReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
