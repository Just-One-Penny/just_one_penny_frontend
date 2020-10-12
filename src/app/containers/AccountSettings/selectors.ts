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

// BillingInfo selectors start here
export const selectAddress = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.address,
);

export const selectCity = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.city,
);

export const selectState = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.state,
);

export const selectZip = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.zip,
);

export const selectCardType = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.cardType,
);

export const selectCardNumber = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.cardNumber,
);

export const selectExpiry = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.expiry,
);

export const selectCvc = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.cvc,
);

export const selectAccountSettings = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState,
);
