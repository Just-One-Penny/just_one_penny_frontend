import { call, put, select, takeEvery } from 'redux-saga/effects';
import { selectUserId, selectCharityId, selectPaymentInfo } from './selectors';
import { actions } from './slice';
import {
  DonationModalSuccess,
  DonationModalError,
  DonationSubmitted,
  DonationSubmission,
} from './types';
import { donationApi } from 'api/donationsApi';

export function* checkDonation() {
  const paymentInfo: DonationSubmission = yield select(selectPaymentInfo);
  if (!paymentInfo) {
    yield put(actions.donationModalError(DonationModalError.NO_AMOUNT));
    return;
  }

  const userId: string = yield select(selectUserId);
  const charityId: string = yield select(selectCharityId);

  const donation: DonationSubmitted = {
    userId,
    charityId,
    ...paymentInfo,
    dateSent: new Date(),
  };

  const response: DonationModalSuccess = yield call(
    donationApi.submitDonation,
    donation,
  );

  yield put(actions.donationSuccess());
}
export function* donationModalSaga() {
  yield takeEvery(actions.submitDonation.type, checkDonation);
}
