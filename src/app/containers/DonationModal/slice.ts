import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  ContainerState,
  DonationModalError,
  IDs,
  DonationSubmission,
} from './types';

// The initial state of the DonationModal container
export const initialState: ContainerState = {
  userId: '',
  charityId: '',
  loading: false,
  error: null,
  paymentInfo: null,
};

const donationModalSlice = createSlice({
  name: 'donationModal',
  initialState,
  reducers: {
    changeIds(state, action: PayloadAction<IDs>) {
      state.userId = action.payload.userId;
      state.charityId = action.payload.charityId;
    },
    submitDonation(state, action: PayloadAction<DonationSubmission>) {
      state.loading = true;
      state.error = null;
      state.paymentInfo = action.payload;
    },
    donationSuccess(state) {
      state.userId = '';
      state.charityId = '';
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
