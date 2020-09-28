import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  ContainerState,
  AuthenticationModalErrorType,
  AuthenticationModalSuccess,
} from './types';

// The initial state of the AuthenticationModal container
export const initialState: ContainerState = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  loading: false,
  error: null,
};

const authenticationModalSlice = createSlice({
  name: 'authenticationModal',
  initialState,
  reducers: {
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    changeFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    changeLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    changePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    registerUser(state) {
      state.loading = true;
      state.error = null;
    },
    loginUser(state) {
      state.loading = true;
      state.error = null;
    },
    authenticationModalSuccess(
      state,
      action: PayloadAction<AuthenticationModalSuccess>,
    ) {
      // const token = action.payload;
      state.loading = false;
    },
    authenticationModalError(
      state,
      action: PayloadAction<AuthenticationModalErrorType>,
    ) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authenticationModalSlice;
