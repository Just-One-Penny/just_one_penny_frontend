import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the CharityDisplay container
export const initialState: ContainerState = {};

const charityDisplaySlice = createSlice({
  name: 'charityDisplay',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = charityDisplaySlice;
