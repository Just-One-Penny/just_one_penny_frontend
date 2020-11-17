/**
 *
 * DonationModal
 *
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Input } from 'app/components/Input';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { donationModalSaga } from './saga';

import { useAuth } from 'context/auth-context';
import { FormField } from 'app/components/FormField';

interface Props {
  charityId: string;
  charityName: string;
}

export function DonationModal(props: Props) {
  const { user } = useAuth();
  const [state, setState] = useState({
    amount: null,
    fullName: '',
  });
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: donationModalSaga });

  const ids = {
    userId: user.id!,
    charityId: props.charityId,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const name = evt.currentTarget.name;
    console.log('onChange -> name', name);
    const value = evt.currentTarget.value;
    console.log('onChange -> value', value);
    setState({ ...state, [name]: value });
  };

  const submitPayment = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    dispatch(actions.changeIds(ids));
    dispatch(actions.submitDonation());
  };

  const cancelPayment = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    dispatch(actions.cancelDonation());
  };

  return (
    <Wrapper>
      <Header>$0</Header>
      <ModalContent>
        <FormField
          label="Full Name"
          value={state.fullName}
          onChange={onChange}
        />
        $
        <Input
          name="amount"
          type="number"
          onChange={onChange}
          min="0.01"
          step="0.01"
          placeholder="0.01"
          required
        />
        <DonateButton onClick={() => submitPayment()}>Donate</DonateButton>
        <CancelButton onClick={() => cancelPayment()}>Cancel</CancelButton>
      </ModalContent>
    </Wrapper>
  );
}

const Header = styled.div`
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-content: center;
  align-items: center;
  background-color: #11569b;
  height: 5rem;
  width: 100%;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    70px/96px var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal 900 70px/96px Avenir;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const ModalContent = styled.div`
  padding: 2rem;
`;

const Text = styled.p`
  text-align: left;
  font: normal normal normal 16px/22px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
`;

const DonateButton = styled.button`
  background-color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
  .icon {
    margin-right: 0.25rem;
  }
`;

const CancelButton = styled.button`
  background-color: #c14200;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
  .icon {
    margin-right: 0.25rem;
  }
`;

const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
