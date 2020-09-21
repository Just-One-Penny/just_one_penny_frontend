/**
 *
 * DonationModal
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectAmount } from './selectors';
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
  const amount = useSelector(selectAmount);
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

  const submitModal = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    dispatch(actions.changeIds(ids));
    dispatch(actions.submitDonation());
  };

  return (
    <>
      <Div>
        <h1>Donate to {props.charityName}</h1>
        <p>
          Sunt ad commodo ex magna laboris id sint exercitation cupidatat. Enim
          anim dolore nostrud ad nulla incididunt magna qui do qui proident
          cupidatat quis. Sit ad tempor veniam veniam cupidatat anim ullamco
          voluptate commodo exercitation. Veniam culpa occaecat nulla dolore
          mollit nostrud aliquip ullamco est ex deserunt. Proident labore est
          dolor consectetur minim anim incididunt eu ad mollit ipsum elit.
        </p>
        $
        <input
          name="amount"
          type="number"
          value={amount}
          onChange={onChange}
          min="0.01"
          step="0.01"
          placeholder="0.01"
          required
        />
        <button onClick={() => submitModal()}>Donate</button>
        <button>Cancel</button>
      </Div>
    </>
  );
}

const Div = styled.div``;
