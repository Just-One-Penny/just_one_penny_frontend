// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { takeEvery, put } from 'redux-saga/effects';
import { actions } from './slice';
// import { Charity } from '/types/Charity';
import { charityApi } from 'api/charityApi';
// import { call } from "redux-saga/effects";
import { authStorageKey } from 'api/userApi';

export function* getCharities() {
  const charities = yield charityApi.getCharities;
  //localStorage.setItem(authStorageKey, charities.charityListState.charities);
  return charities;
}

export function* charityListSaga() {
  yield takeEvery(actions.getCharitiesRequest.type, getCharities);
}
