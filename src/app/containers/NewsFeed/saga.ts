import { take, call, put, select, takeLeading } from 'redux-saga/effects';
import { actions } from './slice';
import { feedApi } from '../../../api/feedApi';
import { NewsFeedSuccess } from './types';

export function* loadFeed() {
  yield put(actions.loadingFeed);
  try {
    const keywords = ['charity', 'donation', 'giving'];
    const data: NewsFeedSuccess = yield feedApi.getFeed(keywords);
    yield put(actions.feedLoaded(data));
    return;
  } catch (err) {
    yield put(actions.feedError(err));
  }
}

export function* newsFeedSaga() {
  yield takeLeading(actions.loadingFeed, loadFeed);
}
