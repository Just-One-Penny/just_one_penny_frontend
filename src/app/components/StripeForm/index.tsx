/**
 *
 * StripeForm
 *
 */
import React from 'react';

import styled from 'styled-components';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { BillingDetailsField } from '../BillingDetailsField';

interface Props {
  fullName?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  onChange: Function;
}

export function StripeForm(props: Props) {
  const { fullName, email, address, city, state, zip } = props;

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();
    const elem = elements?.getElement(CardElement);
    if (elem) {
      const res = await stripe?.createPaymentMethod({
        type: 'card',
        card: elem,
        billing_details: {
          name: fullName,
          email: email,
          address: {
            line1: address,
            city: city,
            postal_code: zip,
            state: state,
          },
        },
      });
      if (res?.paymentMethod) {
        console.log('res.paymentMethod >>> ', res.paymentMethod);
        console.log('payment_Method >>> ', res.paymentMethod.billing_details);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Row>
          <BillingDetailsField
            fullName={fullName}
            email={email}
            address={address}
            city={city}
            state={state}
            zip={zip}
            onChange={evt => props.onChange(evt)}
          />

          <CardElementContainer>
            <CardElement options={cardElementOptions} />
          </CardElementContainer>
        </Row>
        {/* <button type="submit">SUBMIT</button> */}
        <Row>
          <SubmitButton>SAVE</SubmitButton>
        </Row>
      </form>
    </div>
  );
}

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

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

const Row = styled.div`
  width: 475px;
  margin: 30px auto;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #829fff;
  border-radius: 4px;
  background-color: #7795f8;
  position: relative;
`;

// might not use
const SubmitButton = styled.button`
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
