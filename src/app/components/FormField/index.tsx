/**
 *
 * FormField
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
  CardNumberElementComponent,
  CardCvcElementComponent,
  CardExpiryElementComponent,
} from '@stripe/react-stripe-js';
import { Field } from 'react-final-form';

interface Props {
  name?: string;
  label?: string;
  type?: string;
  component?:
    | string
    | CardNumberElementComponent
    | CardCvcElementComponent
    | CardExpiryElementComponent;
  placeholder?: string;
  required?: boolean;
  format?: Function;
  options?: any[];
  formatOnBlur?: boolean;
  parse?: Function;
}

export function FormField(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const {
    label,
    type = 'text',
    component = 'input',
    name,
    placeholder,
    required,
    format,
    formatOnBlur,
    options,
    parse,
  } = props;

  return (
    <>
      <InputLabel>{label}</InputLabel>
      {options?.length ? (
        <Input
          name={name}
          component={component}
          type={type}
          placeholder={placeholder}
          required={required}
          format={format}
          formatOnBlur={formatOnBlur}
          parse={parse}
        >
          {options.map(o => o)}
        </Input>
      ) : (
        <Input
          name={name}
          component={component}
          type={type}
          placeholder={placeholder}
          required={required}
          format={format}
          formatOnBlur={formatOnBlur}
          parse={parse}
        />
      )}
    </>
  );
}

const InputLabel = styled.div`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-21) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal medium 14px/21px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  margin-top: 1rem;
`;

const Input = styled(Field)`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
  border: 1px solid #9fa2a8;
  padding: 0.25rem;
  border-radius: 5px;
  width: 100%;
`;
