/**
 *
 * BillingDetailsField
 *
 */
import { STATES, COUNTRIES } from 'app/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormField } from '../FormField';

export function BillingDetailsField() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="flex w-full flex-row">
        <div className="w-1/2 mr-2">
          <FormField
            name="cardFirst"
            label="Cardholder First Name"
            type="text"
            placeholder="First Name"
            required
          />
        </div>
        <div className="w-1/2">
          <FormField
            name="cardLast"
            label="Cardholder Last Name"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
      </div>
      <FormField
        name="billingAddress"
        label="Billing Address"
        type="text"
        placeholder="Street Address"
        required
      />
      <FormField
        name="billingCity"
        label="City"
        type="text"
        placeholder="Billing City"
        required
      />
      <div className="flex w-full flex-row">
        <div className="w-1/2 mr-2">
          <FormField
            name="state"
            label="State"
            component="select"
            placeholder="Select State"
            options={STATES}
            required
          />
        </div>
        <div className="w-1/2 mr-2">
          <FormField
            name="zip"
            label="ZIP"
            type="text"
            placeholder="Billing Zip"
            required
          />
        </div>
      </div>
      <FormField
        name="country"
        label="Country"
        component="select"
        placeholder="Select Country"
        options={COUNTRIES}
        required
      />
    </>
  );
}
