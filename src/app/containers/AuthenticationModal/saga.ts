import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  selectEmail,
  selectPassword,
  selectFirstName,
  selectLastName,
  selectAccessToken,
  selectProvider,
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
  const fullName: string = firstName + ' ' + lastName;
  const credentials = {
    email,
    password,
    fullName,
  };
  const response: AuthenticationModalSuccess = yield call(
    userApi.userRegister,
    credentials,
  );
  localStorage.setItem(authStorageKey, response.token.accessToken);
  yield put(actions.authenticationModalSuccess(response.user));
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

  localStorage.setItem(authStorageKey, response.token.accessToken);
  yield put(actions.authenticationModalSuccess(response.user));
}

/**
 * Facebook Auth
 */
export function* socialAuth() {
  const access_token: string = yield select(selectAccessToken);
  const provider: string = yield select(selectProvider);
  const func =
    provider === 'facebook' ? userApi.userAuthFacebook : userApi.userAuthGoogle;

  try {
    const response: AuthenticationModalSuccess = yield call(func, {
      access_token,
    });
    localStorage.setItem(authStorageKey, response.token.accessToken);
    yield put(actions.authenticationModalSuccess(response.user));
  } catch (error) {
    console.log(error);
  }
}

export function* authenticationModalSaga() {
  yield takeEvery(actions.registerUser.type, registerUser);
  yield takeEvery(actions.loginUser.type, loginUser);
  yield takeEvery(actions.setAccessToken.type, socialAuth);
}
