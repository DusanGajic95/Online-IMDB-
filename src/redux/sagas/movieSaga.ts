import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../api';
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE, CREATE_MOVIE_REQUEST, CREATE_MOVIE_SUCCESS, CREATE_MOVIE_FAILURE } from '../actions/types';

function* fetchMovies() {
  try {
    const response = yield call(api.get, '/movies');
    yield put({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_MOVIES_FAILURE, payload: error.message });
  }
}

function* fetchMovie(action: any) {
  try {
    const response = yield call(api.get, `/movies/${action.payload}`);
    yield put({ type: FETCH_MOVIE_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_MOVIE_FAILURE, payload: error.message });
  }
}

function* createMovie(action: any) {
  try {
    const response = yield call(api.post, '/movies', action.payload);
    yield put({ type: CREATE_MOVIE_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: CREATE_MOVIE_FAILURE, payload: error.message });
  }
}

function* movieSaga() {
  yield takeLatest(FETCH_MOVIES_REQUEST, fetchMovies);
  yield takeLatest(FETCH_MOVIE_REQUEST, fetchMovie);
  yield takeLatest(CREATE_MOVIE_REQUEST, createMovie);
}

export default movieSaga;
