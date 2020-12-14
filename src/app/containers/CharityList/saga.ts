import { takeEvery, put, call, select } from 'redux-saga/effects';
import { actions } from './slice';
import { charityApi } from 'api/charityApi';
import { GetCharitiesErrorType } from './types';
import { selectSearch } from './selectors';

export function* getCharities() {
  const search = yield select(selectSearch);
  const charities = yield call(charityApi.getCharities, search);
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
