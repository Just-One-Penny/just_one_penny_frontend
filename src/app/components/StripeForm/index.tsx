/**
 *
 * StripeForm
 *
 */
import React, { useState } from 'react';

import styled from 'styled-components';
import { Button } from '@welcome-ui/button';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { BillingDetailsField } from '../BillingDetailsField';

interface Props {
  currentName?: string;
  currentEmail?: string;
  currentAddress?: string;
  currentCity?: string;
  currentState?: string;
  currentZip?: string;
  handleChange: Function;
  submitForm: Function;
  cancelForm: Function;
}

export function StripeForm(props: Props) {
  const {
    currentName,
    currentEmail,
    currentAddress,
    currentCity,
    currentState,
    currentZip,
    submitForm,
    cancelForm,
    handleChange,
  } = props;

  const stripe = useStripe();
  const elements = useElements();

  const [fullName, setFullName] = useState(currentName);
  const [email, setEmail] = useState(currentEmail);
  const [address, setAddress] = useState(currentAddress);
  const [city, setCity] = useState(currentCity);
  const [state, setState] = useState(currentState);
  const [zip, setZip] = useState(currentZip);
  console.log('StripeForm props >>> ', props);
  console.log('StripeForm city >>> ', city);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    switch (evt.currentTarget.name) {
      case 'email':
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
        // submit form
        submitForm();
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
            onChange={evt => {
              onChange(evt);
              handleChange(evt);
            }}
          />

          <CardElementContainer>
            <CardElement options={cardElementOptions} />
          </CardElementContainer>
        </Row>
        <Row>{/* <SubmitButton>SAVE</SubmitButton> */}</Row>
      </form>
      <Button name="cancel" onClick={() => cancelForm()}>
        CANCEL
      </Button>
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

// const SubmitButton = styled.button`
//   display: block;
//   height: 40px;
//   width: 100%;
//   font-size: inherit;
//   background-color: ${props => (props.disabled ? '#7795f8' : '#f6a4eb')};
//   box-shadow: ${props =>
//     props.disabled
//       ? 'none'
//       : '0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #ffb9f6;'};
//   border-radius: 4px;
//   opacity: ${props => (props.disabled ? 0.5 : 1)};
//   color: #fff;
//   font-weight: 600;
//   cursor: pointer;
// `;
