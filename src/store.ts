import { combineReducers } from 'redux';
import authSlice from './redux/slices/authSlice';
import movieReducer from './redux/reducers/movieReducer';
import directorReducer from './redux/reducers/directorReducer';
const rootReducer = combineReducers({
  auth: authSlice,
  movies: movieReducer,
  directors: directorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
