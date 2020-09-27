import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, GetCharityErrorType } from './types';
import { Charity } from 'types/Charity';

// The initial state of the CharityDisplay container
export const initialState: ContainerState = {
  charity: null,
  loading: false,
  error: null,
};

const charityDisplaySlice = createSlice({
  name: 'charityDisplay',
  initialState,
  reducers: {
    getCharityByIdRequest(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getCharityByIdSuccess(state, action: PayloadAction<Charity>) {
      state.loading = false;
      state.charity = action.payload;
      state.error = null;
    },
    getCharityByIdError(state, action: PayloadAction<GetCharityErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = charityDisplaySlice;
