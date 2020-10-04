/**
 *
 * PaymentInfo
 *
 */
import React, { memo, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

interface Props {}

// export const PaymentInfo = memo((props: Props) => {
export const PaymentInfo = props => {
  console.log('paymentInfo props >>>>>> ', props);
  const { children, stripePromise } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <Elements stripe={stripePromise}>{children}</Elements>;
};
