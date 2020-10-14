import { call, put, select, takeEvery } from 'redux-saga/effects';
import { actions } from './slice';
import { userApi } from 'api/userApi';
import { selectEmail, selectFullName, selectRole, selectId } from './selectors';
import { UpdateSuccess } from './types';

export function* updateUser() {
  const id: string = yield select(selectId);
  const email: string = yield select(selectEmail);
  const fullName: string = yield select(selectFullName);
  const role: string = yield select(selectRole);

  const userObject = {
    id,
    email,
    fullName,
    role,
  };
  const response: UpdateSuccess = yield call(userApi.updateUser, userObject); //
  yield put(actions.updateSuccess(response));
}

export function* accountSettingsSaga() {
  yield takeEvery(actions.updateUser.type, updateUser);
}
