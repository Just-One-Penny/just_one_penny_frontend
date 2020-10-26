/**
 *
 * AccountPaymentInfo
 *
 */
import React from 'react';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useAuth } from 'context/auth-context';
import { reducer, sliceKey, actions } from './slice';
import { selectIsEditing } from './selectors';
import { accountSettingsSaga } from './saga';
import { UpdatedBillingInfoSuccess } from './types';
import { useSelector, useDispatch } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { ReactComponent as EditIcon } from './assets/edit-regular.svg';
import { PageWrapper } from '../../components/PageWrapper';
import { Box } from '@welcome-ui/box';
import { Button } from '@welcome-ui/button';

import { PaymentInfo } from '../../components/PaymentInfo';
import { StripeForm } from '../../components/StripeForm';

const stripePromise = loadStripe(
  'pk_test_51HWR6NHp3C1otng9BzgliWzedOOJE7iXz0hE4vKQpB2txOHPdD97Kfvzh4wvHtmSxK7QMbSG2xmI7hmFdf1uOBEt00Vh35ooIT',
);

export function AccountPaymentInfo() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: accountSettingsSaga });

  // const { user } = useAuth();
  const user = {
    id: '7',
    fullName: 'John Smith',
    email: 'JSmitty@gmail.com',
    address: 'user.address',
    city: 'user.city',
    state: 'user.state',
    zip: 'user.zip',
    cardType: 'user.cardType',
    cardNumber: 'user.cardNumber',
    expiry: 'user.expiry',
    cvc: 'user.cvc',
  };
  const currentBilling: UpdatedBillingInfoSuccess = {
    id: user.id!,
    fullName: user.fullName!,
    email: user.email!,
    address: user.address!,
    city: user.city!,
    state: user.state!,
    zip: user.zip!,
    cardType: user.cardType!,
    cardNumber: user.cardNumber!,
    expiry: user.expiry!,
    cvc: user.cvc!,
  };

  const dispatch = useDispatch();

  // This onChange doesn't really seem necessary to me if we're dispatching the updatedBilling object on submit
  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    switch (evt.currentTarget.name) {
      case 'email':
        dispatch(actions.changeEmail(evt.currentTarget.value));
        break;
      case 'fullName':
        dispatch(actions.changeName(evt.currentTarget.value));
        break;
      case 'address':
        dispatch(actions.changeAddress(evt.currentTarget.value));
        break;
      case 'city':
        dispatch(actions.changeCity(evt.currentTarget.value));
        break;
      case 'state':
        dispatch(actions.changeState(evt.currentTarget.value));
        break;
      case 'zip':
        dispatch(actions.changeZip(evt.currentTarget.value));
        break;
      case 'cardType':
        dispatch(actions.changeCardType(evt.currentTarget.value));
        break;
      case 'cardNumber':
        dispatch(actions.changeCardNumber(evt.currentTarget.value));
        break;
      case 'expiry':
        dispatch(actions.changeExpiry(evt.currentTarget.value));
        break;
      case 'cvc':
        dispatch(actions.changeCvc(evt.currentTarget.value));
        break;
      default:
        break;
    }
  };

  const isEditing = useSelector(selectIsEditing);

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    switch (evt.currentTarget.name) {
      case 'edit':
        dispatch(actions.changeIsEditing(currentBilling));
        break;
      default:
        break;
    }
  };

  const submitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    dispatch(actions.updatePayment());
  };

  const cancelForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    dispatch(actions.changeIsEditing(false));
  };

  return (
    <PageWrapper>
      {user ? (
        <div>
          {!isEditing ? (
            <div>
              <div>
                <Box>Name: {user?.fullName}</Box>
                <Box>Email: {user?.email}</Box>
                <Box>Address: {user.address}</Box>
                <Box>City: {user.city}</Box>
                <Box>State: {user.state}</Box>
                <Box>Zip: {user.zip}</Box>
              </div>
              <div>
                <Button onClick={handleClick} name="edit">
                  <EditIcon title="edit" />
                </Button>
              </div>
            </div>
          ) : (
            <PaymentInfo
              title="Just One Penny"
              stripePromise={stripePromise}
              submitForm={submitForm}
              cancelForm={cancelForm}
              handleChange={onChange}
            >
              <StripeForm
                currentName={user.fullName}
                currentEmail={user.email}
                currentAddress={user.address}
                currentCity={user.city}
                currentState={user.state}
                currentZip={user.zip}
                handleChange={onChange}
                submitForm={submitForm}
                cancelForm={cancelForm}
              />
            </PaymentInfo>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </PageWrapper>
  );
}
