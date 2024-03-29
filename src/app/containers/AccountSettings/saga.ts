import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { actions } from './slice';
import { userApi } from 'api/userApi';
import {
  selectEmail,
  selectFullName,
  selectRole,
  selectId,
  selectAddress,
  selectCity,
  selectState,
  selectZip,
  selectCardType,
  selectCardNumber,
  selectExpiry,
  selectCvc,
} from './selectors';
import {
  UpdateSuccess,
  GetCharitiesErrorType,
  UpdatedBillingInfoSuccess,
} from './types';

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

export function* updatePayment() {
  const id: string = yield select(selectId);
  const email: string = yield select(selectEmail);
  const fullName: string = yield select(selectFullName);
  const address: string = yield select(selectAddress);
  const city: string = yield select(selectCity);
  const state: string = yield select(selectState);
  const zip: string = yield select(selectZip);
  const cardType: string = yield select(selectCardType);
  const cardNumber: string = yield select(selectCardNumber);
  const expiry: string = yield select(selectExpiry);
  const cvc: string = yield select(selectCvc);

  const paymentObj = {
    id,
    fullName,
    email,
    address,
    city,
    state,
    zip,
    cardType,
    cardNumber,
    expiry,
    cvc,
  };
  const response: UpdatedBillingInfoSuccess = yield call(
    userApi.updatePayment,
    paymentObj,
  );
  yield put(actions.updatePaymentSuccess(response));
}

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

// This is the saga that you use with the useInjectSaga function
export function* accountSettingsSaga() {
  yield takeEvery(actions.getCharitiesRequest.type, getCharities);
  yield takeEvery(actions.updateUser.type, updateUser);
  yield takeEvery(actions.updatePayment.type, updatePayment);
}
