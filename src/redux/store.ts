import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import movieReducer from './reducers/movieReducer';
import directorReducer from './reducers/directorReducer'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer,
    directors: directorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
