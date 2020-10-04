/**
 *
 * PaymentInfo
 *
 */
import React, { memo, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
// import { AccountPaymentInfo } from '../../containers/AccountSettings/AccountPaymentInfo';

interface Props {}

// export const PaymentInfo = memo((props: Props) => {
export const PaymentInfo = props => {
  console.log('paymentInfo props >>>>>> ', props);
  const { children } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <Elements stripe={stripePromise}>{children}</Elements>;
  // return <Layout title="Donut Shop">{children}</Layout>;
};

// const Div = styled.div``;

const FormFieldContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 15px;
  border-top: 1px solid #819efc;

  &:first-of-type {
    border-top: none;
  }
`;

const Label = styled.label`
  width: 20%;
  min-width: 70px;
  padding: 11px 0;
  color: #c4f0ff;
  overflow: hidden;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-right: 1px solid #819efc;
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 11px 15px 11px 8px;
  color: #fff;
  background-color: transparent;
  animation: 1ms void-animation-out;

  &::placeholder {
    color: #87bbfd;
  }
`;

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

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} required />
    </FormFieldContainer>
  );
};

const fade = keyframes`
  from {
    opacity: 0;
    transform: scale3D(0.95, 0.95, 0.95);
  }
  to {
    opacity: 1;
    transform: scale3D(1, 1, 1);
  }
`;

const ErrorContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  font-size: 13px;
  margin: -10px auto 0px auto;
  width: 100%;
  max-width: 450px;
  opacity: 90;
  animation: ${fade} 150ms ease-out;
  animation-delay: 50ms;
  animation-fill-mode: forwards;
  will-change: opacity;

  & svg {
    margin-right: 10px;
  }
`;

export const CheckoutError = ({ children }) => (
  <ErrorContainer role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </ErrorContainer>
);

export const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="Jane Doe"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="jane.doe@example.com"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="185 Berry St. Suite 550"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="San Francisco"
        required
      />
      <FormField
        name="state"
        label="State"
        type="text"
        placeholder="California"
        required
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="94103"
        required
      />
    </>
  );
};

const API_KEY =
  'pk_test_51HWR6NHp3C1otng9BzgliWzedOOJE7iXz0hE4vKQpB2txOHPdD97Kfvzh4wvHtmSxK7QMbSG2xmI7hmFdf1uOBEt00Vh35ooIT';

const stripePromise = loadStripe(API_KEY);

// TIP: don't call loadStipe within render method of a component
// because you don't want to load more than you have to.  just once per page.

export const Layout = ({ children, title }) => {
  console.log('>>>>>   children >>>> ', children);
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

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
    // a tip, Stripe's amount is in the lowest denomination, 1 cent. soo 100 = $1

    // it is best practice to disable your submit button when you're making payment requests.
    console.log(clientSecret);

    // create a payment intent on the server
    // a client_secret is returned from the payment intent, which we need

    // need ref to cardElement that we defined earlier.
    const cardElement = elements?.getElement(CardElement);

    // need stripe.js
    // create a payment method
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

      console.log(confirmedCardPayment);
      // payment method id
      // client_secret

      //on success
      onSuccessfulCheckout();
    }
  };

  // stripe.com/docs/js

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
        <BillingDetailsFields />
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
