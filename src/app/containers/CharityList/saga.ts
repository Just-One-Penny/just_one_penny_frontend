import { takeEvery, put, call } from 'redux-saga/effects';
import { actions } from './slice';
import { charityApi } from 'api/charityApi';
import { GetCharitiesErrorType } from './types';

export function* getCharities() {
  const charities = yield call(charityApi.getCharities);
  if (charities != null) {
    yield put(actions.getCharitiesSuccess(charities));
  } else {
    yield put(actions.getCharitiesError(GetCharitiesErrorType.GENERAL_ERROR));
  }
  return charities;
}

export function* charityListSaga() {
  yield takeEvery(actions.getCharitiesRequest.type, getCharities);
}
