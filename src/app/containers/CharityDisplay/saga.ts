import { call, put, select, takeEvery } from 'redux-saga/effects';
import { actions } from './slice';

// eslint-disable-next-line prettier/prettier
import { Charity } from "types/Charity";
import { GetCharityErrorType } from './types';
import { charityApi } from 'api/charityApi';
import { selectCharityDisplayId } from './selectors';

export function* getCharityById() {
  const id: string = yield select(selectCharityDisplayId);
  const charity: Charity = yield call(charityApi.getCharityById, id);
  if (charity != null) {
    yield put(actions.getCharityByIdSuccess(charity));
  } else {
    yield put(actions.getCharityByIdError(GetCharityErrorType.GENERAL_ERROR));
  }
  return charity;
}

export function* charityDisplaySaga() {
  yield takeEvery(actions.getCharityByIdRequest.type, getCharityById);
}
