import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import movieSaga from './movieSaga';
import directorSaga from './directorSaga';

function* rootSaga() {
  yield all([
    userSaga(),
    movieSaga(),
    directorSaga(),
  ]);
}

export default rootSaga;
