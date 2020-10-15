/**
 *
 * PaymentInfo
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Elements } from '@stripe/react-stripe-js';
import { StripeForm } from '../StripeForm';

export const PaymentInfo = props => {
  const { stripePromise, submitForm, cancelForm } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Elements stripe={stripePromise}>
      <StripeForm
        submitForm={submitForm}
        cancelForm={cancelForm}
        handleChange={props.handleChange}
      />
    </Elements>
  );
};
