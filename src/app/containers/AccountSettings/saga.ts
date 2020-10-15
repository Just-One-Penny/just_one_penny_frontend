import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { actions } from './slice';
import { userApi } from 'api/userApi';
import { selectEmail, selectFullName, selectRole, selectId } from './selectors';
import { UpdateSuccess, GetCharitiesErrorType } from './types';

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

//VK//
export function* getCharities() {
  const id = yield select(selectId);
  const charities = yield call(userApi.getCharities, id);
  if (charities != null) {
    yield put(actions.getCharitiesSuccess(charities));
  } else {
    yield put(actions.getCharitiesError(GetCharitiesErrorType.GENERAL_ERROR));
  }

  return charities;
}
