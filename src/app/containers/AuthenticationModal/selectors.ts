import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.authenticationModal || initialState;

export const selectEmail = createSelector(
  [selectDomain],
  authenticationModalState => authenticationModalState.email,
);
export const selectFirstName = createSelector(
  [selectDomain],
  authenticationModalState => authenticationModalState.firstName,
);
export const selectLastName = createSelector(
  [selectDomain],
  authenticationModalState => authenticationModalState.lastName,
);
export const selectPassword = createSelector(
  [selectDomain],
  authenticationModalState => authenticationModalState.password,
);

export const selectAccessToken = createSelector(
  [selectDomain],
  authenticationModalState => authenticationModalState.accessToken,
);

export const selectProvider = createSelector(
  [selectDomain],
  authenticationModalState => authenticationModalState.provider,
);

export const selectUser = createSelector(
  [selectDomain],
  authenticationModalState => authenticationModalState.user,
);

export const selectLoading = createSelector(
  [selectDomain],
  authenticationModalState => authenticationModalState.loading,
);

export const selectSuccess = createSelector(
  [selectDomain],
  authenticationModalState => authenticationModalState.success,
);

export const selectError = createSelector(
  [selectDomain],
  authenticationModalState => authenticationModalState.error,
);
