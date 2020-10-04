/**
 *
 * AccountPaymentInfo
 *
 */
import React, { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';

import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { PaymentInfo } from '../../components/PaymentInfo';
import { BillingDetailsField } from '../../components/BillingDetailsField';
import { CheckoutError } from '../../components/CheckoutError';

export function AccountPaymentInfo() {
  return (
    <PaymentInfo title="Just One Penny" stripePromise={stripePromise}>
      <CheckoutForm
        price={10}
        onSuccessfulCheckout={() => console.log('/success')}
      />
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

const API_KEY =
  'pk_test_51HWR6NHp3C1otng9BzgliWzedOOJE7iXz0hE4vKQpB2txOHPdD97Kfvzh4wvHtmSxK7QMbSG2xmI7hmFdf1uOBEt00Vh35ooIT';

const stripePromise = loadStripe(API_KEY);

// don't call loadStipe within render method of a component
// because you don't want to load more than you have to.
const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

export function CheckoutForm(price, onSuccessfulCheckout) {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  const handleFormSubmit = async ev => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value,
      },
    };

    setProcessingTo(true);

    const { data: clientSecret } = await axios.post('/api/payment_intents', {
      amount: price * 100,
    });

    // it is best practice to disable your submit button when you're making payment requests.
    console.log(clientSecret);

    // a client_secret is returned from the payment intent, which we need

    // ref to cardElement
    const cardElement = elements?.getElement(CardElement);

    if (cardElement) {
      const paymentMethodReq = await stripe?.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingDetails,
      });
      console.log(paymentMethodReq);
      // confirm the card payments
      const confirmedCardPayment = await stripe?.confirmCardPayment(
        clientSecret,
        {
          payment_method: paymentMethodReq?.paymentMethod?.id,
        },
      );

      //on success
      onSuccessfulCheckout();
    }
  };

  const cardElementOptions = {
    // a way to inject styles into that 'iframe' html element
    style: {
      base: {
        fontSize: '16px',
        color: '#fff',
        '::placeholder': {
          // pseudo selector
          color: '#87bbfd',
        },
      },
      invalid: {
        color: '#FFC7EE',
        iconColor: '#FFC7EE',
      },
      complete: {},
    },
    hidePostalCode: true,
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Row>
        <BillingDetailsField />
      </Row>
      <Row>
        <CardElementContainer>
          <CardElement options={cardElementOptions} />
        </CardElementContainer>
      </Row>
      {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
      <Row>
        <SubmitButton disabled={isProcessing}>
          {isProcessing ? 'Processing...' : `Pay $${price}`}
        </SubmitButton>
      </Row>
    </form>
  );
}
