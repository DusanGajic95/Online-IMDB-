import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../api';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/types';

function* login(action: any) {
  try {
    const response = yield call(api.post, '/login', action.payload);
    yield put({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error.message });
  }
}

function* register(action: any) {
  try {
    const response = yield call(api.post, '/register', action.payload);
    yield put({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: REGISTER_FAILURE, payload: error.message });
  }
}

function* userSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(REGISTER_REQUEST, register);
}

export default userSaga;
