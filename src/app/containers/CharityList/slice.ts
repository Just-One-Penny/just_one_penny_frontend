import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, GetCharitiesErrorType } from './types';
import { Charity } from 'types/Charity';

// The initial state of the CharityList container
export const initialState: ContainerState = {
  charities: [],
  loading: false,
  error: null,
  search: null,
};

const charityListSlice = createSlice({
  name: 'charityList',
  initialState,
  reducers: {
    getCharitiesRequest(state, action: PayloadAction<string | null>) {
      state.loading = true;
      state.error = null;
      state.search = action.payload ? JSON.parse(action.payload) : null;
    },
    getCharitiesSuccess(state, action: PayloadAction<Charity[]>) {
      state.loading = false;
      state.error = null;
      state.charities = action.payload;
    },
    getCharitiesError(state, action: PayloadAction<GetCharitiesErrorType>) {
      state.error = action.payload;
      state.loading = false;
      state.charities = [];
    },
  },
});

export const { actions, reducer, name: sliceKey } = charityListSlice;
