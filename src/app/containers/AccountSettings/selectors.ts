import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

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
  accountSettingsState => accountSettingsState.billing.address,
);

export const selectCity = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.billing.city,
);

export const selectState = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.billing.state,
);

export const selectZip = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.billing.zip,
);

export const selectCardType = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.billing.cardType,
);

export const selectCardNumber = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.billing.cardNumber,
);

export const selectExpiry = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.billing.expiry,
);

export const selectCvc = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.billing.cvc,
);

export const selectGetCharities = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.charities,
);

export const selectPassword = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.password,
);

export const selectOldPassword = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState.oldPassword,
);

export const selectAccountSettings = createSelector(
  [selectDomain],
  accountSettingsState => accountSettingsState,
);
