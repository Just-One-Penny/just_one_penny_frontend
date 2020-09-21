/**
 *
 * DonationModal
 *
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Input } from 'app/components/Input';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { donationModalSaga } from './saga';

import { useAuth } from 'context/auth-context';

interface Props {
  charityId: string;
  charityName: string;
}

export function DonationModal(props: Props) {
  const { user } = useAuth();
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: donationModalSaga });

  const ids = {
    userId: user.id!,
    charityId: props.charityId,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    switch (evt.currentTarget.name) {
      case 'amount':
        dispatch(actions.changeAmount(parseInt(evt.currentTarget.value)));
        break;
      default:
        break;
    }
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
    dispatch(actions.changeIds({ userId: '', charityId: '' }));
    dispatch(actions.changeAmount(0));
  };

  return (
    <Wrapper>
      <Header>Donate to {props.charityName}</Header>
      <Text>
        Sunt ad commodo ex magna laboris id sint exercitation cupidatat. Enim
        anim dolore nostrud ad nulla incididunt magna qui do qui proident
        cupidatat quis. Sit ad tempor veniam veniam cupidatat anim ullamco
        voluptate commodo exercitation. Veniam culpa occaecat nulla dolore
        mollit nostrud aliquip ullamco est ex deserunt. Proident labore est
        dolor consectetur minim anim incididunt eu ad mollit ipsum elit.
      </Text>
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
    </Wrapper>
  );
}

const Header = styled.h2`
  text-align: center;
  font: normal normal 900 70px/96px Avenir;
  letter-spacing: 0px;
  color: ${p => p.theme.text};
  opacity: 1;
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
  top: 50px;
  left: 415px;
  width: 450px;
  height: 700px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
