import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  selectEmail,
  selectPassword,
  selectFirstName,
  selectLastName,
} from './selectors';
import {
  AuthenticationModalErrorType,
  AuthenticationModalSuccess,
} from './types';
import { actions } from './slice';
import { userApi, authStorageKey } from 'api/userApi';

/**
 * Register User
 */
export function* registerUser() {
  const email: string = yield select(selectEmail);
  if (email.length === 0) {
    yield put(
      actions.authenticationModalError(
        AuthenticationModalErrorType.EMAIL_EMPTY,
      ),
    );
    return;
  }
  const password: string = yield select(selectPassword);
  if (password.length === 0) {
    yield put(
      actions.authenticationModalError(
        AuthenticationModalErrorType.PASSWORD_EMPTY,
      ),
    );
    return;
  }

  const firstName: string = yield select(selectFirstName);
  const lastName: string = yield select(selectLastName);
  const credentials = {
    email,
    password,
    firstName,
    lastName,
  };
  const response: AuthenticationModalSuccess = yield call(
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
    yield put(
      actions.authenticationModalError(
        AuthenticationModalErrorType.EMAIL_EMPTY,
      ),
    );
    return;
  }
  const password: string = yield select(selectPassword);
  if (password.length === 0) {
    yield put(
      actions.authenticationModalError(
        AuthenticationModalErrorType.PASSWORD_EMPTY,
      ),
    );
    return;
  }

  const credentials = {
    email,
    password,
  };
  const response: AuthenticationModalSuccess = yield call(
    userApi.userLogin,
    credentials,
  );
  console.log('function*loginUser -> response', response);
  localStorage.setItem(authStorageKey, response.token.accessToken);
}

export function* authenticationModalSaga() {
  yield takeEvery(actions.registerUser.type, registerUser);
  yield takeEvery(actions.loginUser.type, loginUser);
}
