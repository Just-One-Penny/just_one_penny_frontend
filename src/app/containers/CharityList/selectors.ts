import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.charityList || initialState;

export const selectCharityList = createSelector(
  [selectDomain],
  charityListState => charityListState.charities,
);

export const selectLoading = createSelector(
  [selectDomain],
  charityListState => charityListState.loading,
);

export const selectSearch = createSelector(
  [selectDomain],
  charityListState => charityListState.search,
);
