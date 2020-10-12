/**
 *
 * PaymentInfo
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Elements } from '@stripe/react-stripe-js';

interface Props {}

// export const PaymentInfo = memo((props: Props) => {
export const PaymentInfo = props => {
  console.log('paymentInfo props >>>>>> ', props);
  const { children, stripePromise } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <Elements stripe={stripePromise}>{children}</Elements>;
};
