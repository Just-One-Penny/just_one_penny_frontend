import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  ContainerState,
  AuthenticationErrorType,
  AuthenticationSuccess,
} from './types';

// The initial state of the Authentication container
export const initialState: ContainerState = {
  email: '',
  password: '',
  fullName: '',
  loading: false,
  error: null,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    changePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    changeFullName(state, action: PayloadAction<string>) {
      state.fullName = action.payload;
    },
    registerUser(state) {
      state.loading = true;
      state.error = null;
    },
    loginUser(state) {
      state.loading = true;
      state.error = null;
    },
    authenticationSuccess(state, action: PayloadAction<AuthenticationSuccess>) {
      const token = action.payload;
      state.loading = false;
    },
    authenticationError(state, action: PayloadAction<AuthenticationErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authenticationSlice;
