/**
 *
 * AccountPaymentInfo
 *
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useAuth } from 'context/auth-context';
import { Button } from '@welcome-ui/button';

import { reducer, sliceKey, actions } from './slice';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsEditing,
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
import { accountSettingsSaga } from './saga';
import { UpdatedBillingInfoSuccess } from './types';

import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { PaymentInfo } from '../../components/PaymentInfo';
import { BillingDetailsField } from '../../components/BillingDetailsField';
import { CheckoutError } from '../../components/CheckoutError';
// import { FormField } from '../../components/FormField';

import { StripeForm } from '../../components/StripeForm';

const stripePromise = loadStripe(
  'pk_test_51HWR6NHp3C1otng9BzgliWzedOOJE7iXz0hE4vKQpB2txOHPdD97Kfvzh4wvHtmSxK7QMbSG2xmI7hmFdf1uOBEt00Vh35ooIT',
);

// THIS IS MEANT FOR THE SERVER SIDE
// const stripe = require('stripe')(
//   'sk_test_51HWR6NHp3C1otng92tkQKzhs2w1ctqPjF0A3tHW1uPDdFvDnuFbuBUJUPZA7taUYIgNhnkz3h08Y8ckn8i7pPkbJ00mYi35Ag7',
// );

// const session = await stripe.checkout.sessions.create({
//   payment_method_types: ['card'],
//   mode: 'setup',
//   customer: 'cus_I9fq1FXGkrpjMa',
//   success_url: `https://example.com/success?session_id=${CHECKOUT_SESSION_ID}`,
//   cancel_url: 'https://example.com/cancel',
// });

export function AccountPaymentInfo() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  // useEffect(() => {
  //   console.log('use Effect is being triggered');
  //   setFullName(fullName);
  // }, [fullName, email, address, city, state, zip]);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    switch (evt.currentTarget.name) {
      case 'email':
        console.log('evt.currentTarget >>> ', evt.currentTarget);
        setEmail(evt.currentTarget.value);
        break;
      case 'fullName':
        setFullName(evt.currentTarget.value);
        break;
      case 'address':
        setAddress(evt.currentTarget.value);
        break;
      case 'city':
        setCity(evt.currentTarget.value);
        break;
      case 'state':
        setState(evt.currentTarget.value);
        break;
      case 'zip':
        setZip(evt.currentTarget.value);
        break;
      default:
        break;
    }
  };

  return (
    <PaymentInfo title="Just One Penny" stripePromise={stripePromise}>
      {/* <StripeForm /> */}
      <StripeForm
        fullName={fullName}
        email={email}
        address={address}
        city={city}
        state={state}
        zip={zip}
        onChange={onChange}
      />
      {/* <CheckoutForm /> */}
      {/* <Row>
        <FormFieldContainer>
          <Label htmlFor={'name'}>{'Full Name'}</Label>
          <Input
            name="fullName"
            type="text"
            // value={fullName}
            placeholder="Full Name"
            // onChange={onChange}
            required
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <Label htmlFor={'email'}>{'Email'}</Label>
          <Input
            name="email"
            type="text"
            // value={email}
            placeholder="email"
            // // onChange={onChange}
            required
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <Label htmlFor={'address'}>{'Address'}</Label>
          <Input
            name="address"
            type="text"
            // value={address}
            placeholder="Address"
            // // onChange={onChange}
            required
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <Label htmlFor={'city'}>{'City'}</Label>
          <Input
            name="city"
            type="text"
            // value={city}
            placeholder="City"
            // // onChange={onChange}
            required
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <Label htmlFor={'state'}>{'State'}</Label>
          <Input
            name="state"
            type="text"
            // value={state}
            placeholder="State"
            // onChange={onChange}
            required
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <Label htmlFor={'zip'}>{'Zip'}</Label>
          <Input
            name="zip"
            type="text"
            // value={zip}
            placeholder="Zip"
            // onChange={onChange}
            required
          />
        </FormFieldContainer>
        <Row>
          <CardElementContainer>
            <CardElement options={cardElementOptions} />
          </CardElementContainer>
        </Row> */}
      {/* <div>
          <Button onClick={() => submitForm()}>SAVE</Button>
          <Button name="cancel" onClick={evt => cancelForm(evt)}>
            CANCEL
          </Button>
        </div> */}
      {/* </Row> */}

      {/* <FormField
          name="name"
          label="Name"
          type="text"
          value={fullName}
          placeholder="Jane Doe"
          onChange={onChange}
          required
        />
        <FormField
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={onChange}
          placeholder="jane.doe@example.com"
          required
        />
        <FormField
          name="address"
          label="Address"
          type="text"
          value={address}
          onChange={onChange}
          placeholder="185 Berry St. Suite 550"
          required
        />
        <FormField
          name="city"
          label="City"
          type="text"
          value={city}
          onChange={onChange}
          placeholder="San Francisco"
          required
        />
        <FormField
          name="state"
          label="State"
          type="text"
          value={state}
          onChange={onChange}
          placeholder="California"
          required
        />
        <FormField
          name="zip"
          label="ZIP"
          type="text"
          value={zip}
          onChange={onChange}
          placeholder="94103"
          required
        />
        </Row> */}
    </PaymentInfo>
  );
}

export const Row = styled.div`
  width: 475px;
  margin: 30px auto;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #829fff;
  border-radius: 4px;
  background-color: #7795f8;
  position: relative;
`;

export const SubmitButton = styled.button`
  display: block;
  height: 40px;
  width: 100%;
  font-size: inherit;
  background-color: ${props => (props.disabled ? '#7795f8' : '#f6a4eb')};
  box-shadow: ${props =>
    props.disabled
      ? 'none'
      : '0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #ffb9f6;'};
  border-radius: 4px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

// const API_KEY =
//   'pk_test_51HWR6NHp3C1otng9BzgliWzedOOJE7iXz0hE4vKQpB2txOHPdD97Kfvzh4wvHtmSxK7QMbSG2xmI7hmFdf1uOBEt00Vh35ooIT';

// // const stripePromise = loadStripe(API_KEY);

// don't call loadStipe within render method of a component
// because you don't want to load more than you have to.
export const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;
