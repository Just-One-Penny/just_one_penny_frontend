import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.stripeSuccess || initialState;

export const selectStripeSuccess = createSelector(
  [selectDomain],
  stripeSuccessState => stripeSuccessState,
);
