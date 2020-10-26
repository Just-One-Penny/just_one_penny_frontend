import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.newsFeed || initialState;

export const selectNewsFeed = createSelector(
  [selectDomain],
  newsFeedState => newsFeedState,
);
