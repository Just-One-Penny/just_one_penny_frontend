import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.authentication || initialState;

export const selectFullName = createSelector(
  [selectDomain],
  authenticationState => authenticationState.fullName,
);
export const selectEmail = createSelector(
  [selectDomain],
  authenticationState => authenticationState.email,
);
export const selectPassword = createSelector(
  [selectDomain],
  authenticationState => authenticationState.password,
);

export const selectLoading = createSelector(
  [selectDomain],
  authenticationState => authenticationState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  authenticationState => authenticationState.error,
);
