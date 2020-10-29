import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the StripeSuccess container
export const initialState: ContainerState = {};

const stripeSuccessSlice = createSlice({
  name: 'stripeSuccess',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = stripeSuccessSlice;
