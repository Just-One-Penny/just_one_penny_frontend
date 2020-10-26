import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { feedApi } from '../../../api/feedApi';

export function* loadFeed() {
  yield put(actions.loadingFeed);
  try {
    const data = yield feedApi.getFeed();
    yield put(actions.feedLoaded(data.newsFeed));
    return;
  } catch (err) {
    yield put(actions.feedError(err));
  }
}

export function* newsFeedSaga() {
  yield takeLatest(actions.loadingFeed, loadFeed);
}
