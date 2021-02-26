/**
 *
 * AccountPaymentInfo
 *
 */
import React from 'react';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import styled from 'styled-components/macro';
// import { useAuth } from 'context/auth-context';
import { reducer, sliceKey, actions } from './slice';
import {
  selectIsEditing,
  selectAddress,
  selectCardNumber,
  selectCardType,
  selectCity,
} from './selectors';
import { accountSettingsSaga } from './saga';
import { UpdatedBillingInfoSuccess } from './types';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as EditIcon } from './assets/edit-regular.svg';
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
    <Wrapper>
      {user ? (
        !isEditing ? (
          <>
            <SubHeading>Billing Information</SubHeading>

            <InfoWrapper>
              <Info>
                <CardInfo>
                  <p>Cardholder: {user.fullName} </p>
                  <p>Card Ending: ####</p>
                  <p>Expiration: mm/yy</p>
                </CardInfo>

                <br />

                <StreetInfo>
                  <p>Street Address </p>
                  <p>City, State, Zip Code</p>
                  <p>Country</p>
                </StreetInfo>
              </Info>

              <EditWrapper>
                <EditButton name="edit" onClick={evt => handleClick(evt)}>
                  Edit
                </EditButton>

                <RemoveButton>Remove</RemoveButton>
              </EditWrapper>
            </InfoWrapper>
            {/* <div>
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
              </div> */}
          </>
        ) : (
          <PaymentInfo submitForm={submitForm} />
        )
      ) : (
        <div></div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.25rem 1rem 0 1rem;
  min-height: 49rem;
  color: #333;

  @media only screen and (max-width: 475px) {
    padding: 1.25rem 0.5rem 4.25rem 0.5rem;
    min-height: 0;
  }
`;

const SubHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 900;
  margin-bottom: 1.0625rem;

  @media only screen and (max-width: 475px) {
    margin-bottom: 0.5625rem;
  }
`;

const InfoWrapper = styled.div`
  padding: 1rem 1rem 1.125rem 1rem;
  display: flex;
  justify-content: space-between;

  border-top: 0.25px solid #e1e1e1;
  border-bottom: 0.25px solid #e1e1e1;

  @media only screen and (max-width: 475px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1rem;
  font-weight: normal;

  @media only screen and (max-width: 475px) {
    margin-bottom: 1.125rem;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StreetInfo = styled.div``;

const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #0a559e;
  cursor: pointer;

  @media only screen and (max-width: 475px) {
    flex-direction: row;
  }
`;

const EditButton = styled.button`
  margin-bottom: 0.625rem;
  align-self: flex-end;

  @media only screen and (max-width: 475px) {
    margin-bottom: 0;
    margin-right: 3.75rem;
  }
`;

const RemoveButton = styled.button``;
