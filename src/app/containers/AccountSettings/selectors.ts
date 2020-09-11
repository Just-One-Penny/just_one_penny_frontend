import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';
// import { accountSettingsSaga } from './saga';

const selectDomain = (state: RootState) =>
  state.accountSettings || initialState;

export const selectId = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.id,
);
export const selectFullName = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.fullName,
);

export const selectEmail = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.email,
);

export const selectRole = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.role,
);

export const selectIsEditing = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.isEditing,
);

export const selectAccountSettings = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState,
);
