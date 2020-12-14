/**
 *
 * PaymentInfo
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { StripeForm } from '../StripeForm';

interface Props {
  submitForm: Function;
  values?: any;
  submitting?: boolean;
}

export const PaymentInfo = (props: Props) => {
  const stripePromise = loadStripe(
    'pk_test_51HWR6NHp3C1otng9BzgliWzedOOJE7iXz0hE4vKQpB2txOHPdD97Kfvzh4wvHtmSxK7QMbSG2xmI7hmFdf1uOBEt00Vh35ooIT',
  );
  const { submitForm, values, submitting } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Elements stripe={stripePromise}>
      <StripeForm
        values={values}
        submitting={submitting}
        submitForm={submitForm}
      />
    </Elements>
  );
};
