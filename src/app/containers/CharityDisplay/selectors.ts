import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.charityDisplay || initialState;

export const selectCharityDisplay = createSelector(
  [selectDomain],
  charityDisplayState => charityDisplayState,
);
