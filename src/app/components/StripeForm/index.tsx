/**
 *
 * StripeForm
 *
 */
import React, { useEffect } from 'react';

import styled from 'styled-components';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { BillingDetailsField } from '../BillingDetailsField';
import { FormField } from '../FormField';

interface BillingProps {
  amount: number;
  fullName: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  state: string;
}

interface Props {
  submitForm: Function;
  submitting?: boolean;
  values: BillingProps;
}

export function StripeForm(props: Props) {
  const { submitting, submitForm, values } = props;

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const handleSubmit = async () => {
      const cardElem = elements?.getElement(CardNumberElement);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const cvcElem = elements?.getElement(CardCvcElement);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const expiryElem = elements?.getElement(CardExpiryElement);
      if (cardElem) {
        const res = await stripe?.createToken(cardElem);
        if (res?.token) {
          submitForm({ ...values, token: res.token });
        }
        // ({
        //   type: 'card',
        //   card: cardElem,
        //   billing_details: {
        //     name: values.fullName,
        //     email: values.email,
        //     address: {
        //       line1: values.address,
        //       city: values.city,
        //       postal_code: values.zip,
        //       state: values.state,
        //     },
        //   },
        // });
      }
    };
    if (submitting) {
      handleSubmit();
    }
  }, [submitting, values, stripe, elements, submitForm]);

  return (
    <Row>
      <BillingDetailsField />
      <FormField
        label="Credit Card Number"
        name="cardNumber"
        component={CardNumberElement}
      />
      <div className="flex w-full flex-row">
        <div className="w-1/2 mr-2">
          <FormField
            label="Expiration Date"
            name="cardExpiry"
            component={CardExpiryElement}
          />
        </div>
        <div className="w-1/2 mr-2">
          <FormField
            label="Security Code"
            name="cardCvc"
            component={CardCvcElement}
          />
        </div>
      </div>
    </Row>
  );
}

const Row = styled.div`
  width: 100%;
  border-radius: 4px;
`;
