/**
 *
 * AccountPaymentInfo
 *
 */
import React from 'react';

import { CheckoutForm, PaymentInfo } from '../../components/PaymentInfo';

export function AccountPaymentInfo() {
  return (
    <PaymentInfo title="Just One Penny">
      <CheckoutForm
        price={10}
        onSuccessfulCheckout={() => console.log('/success')}
      />
    </PaymentInfo>
  );
}
