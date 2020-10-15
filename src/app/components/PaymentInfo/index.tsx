/**
 *
 * PaymentInfo
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Elements } from '@stripe/react-stripe-js';
import { StripeForm } from '../StripeForm';
interface Props {}

// export const PaymentInfo = memo((props: Props) => {
export const PaymentInfo = props => {
  const { children, stripePromise, submitForm, cancelForm } = props;
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
