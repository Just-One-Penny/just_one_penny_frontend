import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.donationModal || initialState;

export const selectUserId = createSelector(
  [selectDomain],
  donationModalState => donationModalState.userId,
);

export const selectCharityId = createSelector(
  [selectDomain],
  donationModalState => donationModalState.charityId,
);

export const selectAmount = createSelector(
  [selectDomain],
  donationModalState => donationModalState.amount,
);
