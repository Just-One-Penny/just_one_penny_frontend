/**
 *
 * AccountPaymentInfo
 *
 */
import React, { useState } from 'react';

import { loadStripe } from '@stripe/stripe-js';

import { PaymentInfo } from '../../components/PaymentInfo';
import { StripeForm } from '../../components/StripeForm';

const stripePromise = loadStripe(
  'pk_test_51HWR6NHp3C1otng9BzgliWzedOOJE7iXz0hE4vKQpB2txOHPdD97Kfvzh4wvHtmSxK7QMbSG2xmI7hmFdf1uOBEt00Vh35ooIT',
);

export function AccountPaymentInfo() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

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

  /**
   * TODO:

Add an endpoint to the API /v1/users/:userID/payment

This API will take advantage of the userLoad function

Use the useAuth hook to get access to the user object

We need access to the paymentMethods field on the user

Build a UI to display the last 4 numbers of a card and card logo
   */

  return (
    <PaymentInfo title="Just One Penny" stripePromise={stripePromise}>
      <StripeForm
        fullName={fullName}
        email={email}
        address={address}
        city={city}
        state={state}
        zip={zip}
        onChange={onChange}
      />
    </PaymentInfo>
  );
}
