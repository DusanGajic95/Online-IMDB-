import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../api';
import { FETCH_DIRECTORS_REQUEST, FETCH_DIRECTORS_SUCCESS, FETCH_DIRECTORS_FAILURE, FETCH_DIRECTOR_REQUEST, FETCH_DIRECTOR_SUCCESS, FETCH_DIRECTOR_FAILURE, CREATE_DIRECTOR_REQUEST, CREATE_DIRECTOR_SUCCESS, CREATE_DIRECTOR_FAILURE } from '../actions/types';

function* fetchDirectors(): Generator<any, void, any> {
  try {
    const response = yield call(api.get, '/directors');
    yield put({ type: FETCH_DIRECTORS_SUCCESS, payload: response.data });
  } catch (error: any) {
    yield put({ type: FETCH_DIRECTORS_FAILURE, payload: error.message });
  }
}

function* fetchDirector(action: any): Generator<any, void, any> {
  try {
    const response = yield call(api.get, `/directors/${action.payload}`);
    yield put({ type: FETCH_DIRECTOR_SUCCESS, payload: response.data });
  } catch (error: any) {
    yield put({ type: FETCH_DIRECTOR_FAILURE, payload: error.message });
  }
}

function* createDirector(action: any): Generator<any, void, any> {
  try {
    const response = yield call(api.post, '/directors', action.payload);
    yield put({ type: CREATE_DIRECTOR_SUCCESS, payload: response.data });
  } catch (error: any) {
    yield put({ type: CREATE_DIRECTOR_FAILURE, payload: error.message });
  }
}

function* directorSaga(): Generator<any, void, any> {
  yield takeLatest(FETCH_DIRECTORS_REQUEST, fetchDirectors);
  yield takeLatest(FETCH_DIRECTOR_REQUEST, fetchDirector);
  yield takeLatest(CREATE_DIRECTOR_REQUEST, createDirector);
}

export default directorSaga;
