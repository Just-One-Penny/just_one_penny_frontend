/**
 *
 * BillingDetailsField
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormField } from '../FormField';

interface Props {
  fullName?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  onChange: Function;
}

export function BillingDetailsField(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <FormField
        name="fullName"
        label="Name"
        type="text"
        value={props.fullName}
        placeholder="Jane Doe"
        onChange={evt => props.onChange(evt)}
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        value={props.email}
        placeholder="jane.doe@example.com"
        onChange={evt => props.onChange(evt)}
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        value={props.address}
        placeholder="185 Berry St. Suite 550"
        onChange={evt => props.onChange(evt)}
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        value={props.city}
        placeholder="San Francisco"
        onChange={evt => props.onChange(evt)}
        required
      />
      <FormField
        name="state"
        label="State"
        type="text"
        value={props.state}
        placeholder="California"
        onChange={evt => props.onChange(evt)}
        required
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        value={props.zip}
        placeholder="94103"
        onChange={evt => props.onChange(evt)}
        required
      />
    </>
  );
}
