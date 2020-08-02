// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { selectEmail, selectPassword, selectFullName } from './selectors';
import { actions } from './slice';
import { AuthenticationErrorType, AuthenticationSuccess } from './types';
import { userApi, authStorageKey } from 'api/userApi';

/**
 * Register User
 */
export function* registerUser() {
  const email: string = yield select(selectEmail);
  if (email.length === 0) {
    yield put(actions.authenticationError(AuthenticationErrorType.EMAIL_EMPTY));
    return;
  }
  const password: string = yield select(selectPassword);
  if (password.length === 0) {
    yield put(
      actions.authenticationError(AuthenticationErrorType.PASSWORD_EMPTY),
    );
    return;
  }

  const fullName: string = yield select(selectFullName);
  const credentials = {
    email,
    password,
    fullName,
  };
  const response: AuthenticationSuccess = yield call(
    userApi.userRegister,
    credentials,
  );
  localStorage.setItem(authStorageKey, response.token.accessToken);
}

/**
 * Login User
 */
export function* loginUser() {
  const email: string = yield select(selectEmail);
  if (email.length === 0) {
    yield put(actions.authenticationError(AuthenticationErrorType.EMAIL_EMPTY));
    return;
  }
  const password: string = yield select(selectPassword);
  if (password.length === 0) {
    yield put(
      actions.authenticationError(AuthenticationErrorType.PASSWORD_EMPTY),
    );
    return;
  }

  const credentials = {
    email,
    password,
  };
  const response: AuthenticationSuccess = yield call(
    userApi.userLogin,
    credentials,
  );
  console.log('function*loginUser -> response', response);
  localStorage.setItem(authStorageKey, response.token.accessToken);
}

export function* authenticationSaga() {
  yield takeEvery(actions.registerUser.type, registerUser);
  yield takeEvery(actions.loginUser.type, loginUser);
}
