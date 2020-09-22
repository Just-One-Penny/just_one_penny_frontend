import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, DonationModalError, IDs } from './types';

// The initial state of the DonationModal container
export const initialState: ContainerState = {
  userId: '',
  charityId: '',
  amount: 0,
  loading: false,
  error: null,
};

const donationModalSlice = createSlice({
  name: 'donationModal',
  initialState,
  reducers: {
    changeAmount(state, action: PayloadAction<number>) {
      state.amount = action.payload;
    },
    changeIds(state, action: PayloadAction<IDs>) {
      state.userId = action.payload.userId;
      state.charityId = action.payload.charityId;
    },
    submitDonation(state) {
      state.loading = true;
      state.error = null;
    },
    cancelDonation(state) {
      state.amount = 0;
    },
    donationSuccess(state) {
      state.userId = '';
      state.charityId = '';
      state.amount = 0;
      state.loading = false;
      state.error = null;
    },
    donationModalError(state, action: PayloadAction<DonationModalError>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = donationModalSlice;
