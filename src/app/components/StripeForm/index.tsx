/**
 *
 * StripeForm
 *
 */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { nextTick } from 'process';

import styled, { keyframes } from 'styled-components';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { BillingDetailsField } from '../BillingDetailsField';
import { FormField } from '../FormField';
import {
  Row,
  CardElementContainer,
} from '../../containers/AccountSettings/AccountPaymentInfo';
import { selectFullName } from 'app/containers/AccountSettings/selectors';

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

  const user = {
    id: '7',
    fullName: 'John Smith',
    email: 'JSmitty@gmail.com',
    address: '123 Paper st',
    city: 'San Francisco',
    state: 'California',
    zip: '94103',
    cardType: 'visa',
    cardNumber: '4242424242424242',
    expiry: '1121',
    cvc: '444',
  };

  // handle state management here, pass it down into BillingDetailsField as props
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
          <FormFieldContainer>
            <Label htmlFor="fullName">Name</Label>
            <Input
              name="fullName"
              // label="Name"
              type="text"
              value={fullName}
              placeholder="Jane Doe"
              onChange={evt => props.onChange(evt)}
              required
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              // label="Email"
              type="email"
              value={email}
              placeholder="jane.doe@example.com"
              onChange={evt => props.onChange(evt)}
              required
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <Label htmlFor="address">Address</Label>
            <Input
              name="address"
              // label="Address"
              type="text"
              value={address}
              placeholder="185 Berry St. Suite 550"
              onChange={evt => props.onChange(evt)}
              required
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <Label htmlFor="city">City</Label>
            <Input
              name="city"
              // label="City"
              type="text"
              value={city}
              placeholder="San Francisco"
              onChange={evt => props.onChange(evt)}
              required
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <Label htmlFor="state">State</Label>
            <Input
              name="state"
              // label="State"
              type="text"
              value={state}
              placeholder="California"
              onChange={evt => props.onChange(evt)}
              required
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <Label htmlFor="zip">Zip</Label>
            <Input
              name="zip"
              // label="Zip"
              type="text"
              value={zip}
              placeholder="94103"
              onChange={evt => props.onChange(evt)}
              required
            />
          </FormFieldContainer>

          {/* <FormField
            name="fullName"
            label="Name"
            type="text"
            value={fullName}
            placeholder="Jane Doe"
            // onChange={val => setFullName(val)}
            required
          />
          <FormField
            name="email"
            label="Email"
            type="email"
            value={email}
            placeholder="jane.doe@example.com"
            required
          />
          <FormField
            name="address"
            label="Address"
            type="text"
            value={address}
            placeholder="185 Berry St. Suite 550"
            required
          />
          <FormField
            name="city"
            label="City"
            type="text"
            value={city}
            placeholder="San Francisco"
            required
          />
          <FormField
            name="state"
            label="State"
            type="text"
            value={state}
            placeholder="California"
            required
          />
          <FormField
            name="zip"
            label="ZIP"
            type="text"
            value={zip}
            placeholder="94103"
            required
          /> */}
          {/* </Row>
        <Row> */}
          <CardElementContainer>
            <CardElement options={cardElementOptions} />
          </CardElementContainer>
        </Row>
        <button type="submit">SUBMIT</button>
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
