/**
 *
 * FormField
 *
 */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

interface Props {
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: Function;
}

export function FormField(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { label, type, name, placeholder, value, onChange } = props;

  /**
   * TODO: allow the change to happen and keep pure component.
   */
  const [newValue, setNewValue] = useState(value);
  // if i use a useEffect() react hook, it's no longer a pure component
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  useEffect(() => {
    console.log('use Effect is being triggered');
    console.log('fullName = ', fullName);
    console.log('email = ', email);
  }, [fullName, email, address, city, state, zip]);

  // const handleChange = event => {
  //   console.log('FormField event => ', event?.currentTarget.value);
  //   setNewValue(event);
  // };

  // useEffect(() => {
  //   handleChange(newValue);
  // }, [newValue]);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    switch (evt.currentTarget.name) {
      case 'email':
        setEmail(evt.currentTarget.value);
        break;
      case 'fullName':
        setFullName(evt.currentTarget.value);
        break;
      case 'address':
        setAddress(evt.currentTarget.value);
        break;
      case 'city':
        setCity(evt.currentTarget.value);
        break;
      case 'state':
        setState(evt.currentTarget.value);
        break;
      case 'zip':
        setZip(evt.currentTarget.value);
        break;
      default:
        break;
    }
  };

  return (
    <FormFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        value={newValue}
        placeholder={placeholder}
        onChange={e => handleChange(e)}
        required
      />
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
