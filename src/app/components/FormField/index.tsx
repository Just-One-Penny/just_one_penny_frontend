/**
 *
 * FormField
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

interface Props {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export function FormField(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { label, type, name, placeholder } = props;

  return (
    <FormFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} required />
    </FormFieldContainer>
  );
}

const FormFieldContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 15px;
  border-top: 1px solid #819efc;

  &:first-of-type {
    border-top: none;
  }
`;

const Label = styled.label`
  width: 20%;
  min-width: 70px;
  padding: 11px 0;
  color: #c4f0ff;
  overflow: hidden;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-right: 1px solid #819efc;
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 11px 15px 11px 8px;
  color: #fff;
  background-color: transparent;
  animation: 1ms void-animation-out;

  &::placeholder {
    color: #87bbfd;
  }
`;
