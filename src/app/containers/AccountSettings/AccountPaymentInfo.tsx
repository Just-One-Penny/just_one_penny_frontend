/**
 *
 * AccountPaymentInfo
 *
 */
import React from 'react';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
// import { useAuth } from 'context/auth-context';
import { reducer, sliceKey, actions } from './slice';
import { selectIsEditing } from './selectors';
import { accountSettingsSaga } from './saga';
import { UpdatedBillingInfoSuccess } from './types';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as EditIcon } from './assets/edit-regular.svg';
import { PageWrapper } from '../../components/PageWrapper';
import { Box } from '@welcome-ui/box';
import { Button } from '@welcome-ui/button';

import { PaymentInfo } from '../../components/PaymentInfo';

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
            <PaymentInfo submitForm={submitForm} />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </PageWrapper>
  );
}
