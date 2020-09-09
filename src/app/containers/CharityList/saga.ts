// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { takeEvery, put, call } from 'redux-saga/effects';
import { actions } from './slice';
// import { Charity } from '/types/Charity';
import { charityApi } from 'api/charityApi';
import { GetCharitiesErrorType } from './types';
// import { call } from "redux-saga/effects";

export function* getCharities() {
  const charities = yield call(charityApi.getCharities);
  if (charities != null) {
    put(actions.getCharitiesSuccess(charities));
  } else {
    yield put(actions.getCharitiesError(GetCharitiesErrorType.GENERAL_ERROR));
  }
  return charities;
}

export function* charityListSaga() {
  yield takeEvery(actions.getCharitiesRequest.type, getCharities);
}
