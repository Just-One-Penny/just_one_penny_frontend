// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { takeEvery, put, call } from 'redux-saga/effects';
import { actions } from './slice';
// import { Charity } from '/types/Charity';
import { charityApi } from 'api/charityApi';
// import { call } from "redux-saga/effects";
import { authStorageKey } from 'api/userApi';

export function* getCharities() {
  //put
  const charities = yield call(charityApi.getCharities);
  put(actions.getCharitiesSuccess(charities));
  //localStorage.setItem(authStorageKey, charities.charityListState.charities);
  return charities;
}

export function* charityListSaga() {
  yield takeEvery(actions.getCharitiesRequest.type, getCharities);
}
