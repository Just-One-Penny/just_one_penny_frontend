import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, UpdatedUser, UpdateSuccess } from './types';
// The initial state of the AccountSettings container
export const initialState: ContainerState = {
  id: '',
  fullName: '',
  email: '',
  role: '',
  isEditing: false,
  loading: false,
};

const accountSettingsSlice = createSlice({
  name: 'accountSettings',
  initialState,
  reducers: {
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    changeName(state, action: PayloadAction<string>) {
      state.fullName = action.payload;
    },
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    changeRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },
    changeIsEditing(state, action: PayloadAction<UpdatedUser | boolean>) {
      if (typeof action.payload == 'boolean') {
        state.isEditing = action.payload;
      } else {
        state.id = action.payload.id!;
        state.fullName = action.payload.fullName!;
        state.email = action.payload.email!;
        state.isEditing = !state.isEditing;
      }
    },
    updateUser(state) {
      state.loading = true;
    },
    updateSuccess(state, action: PayloadAction<UpdateSuccess>) {
      state.isEditing = false;
      state.loading = false;
      state.id = action.payload.id;
      state.fullName = action.payload.name;
      state.role = action.payload.role;
      state.email = action.payload.email;
    },
  },
});

export const { actions, reducer, name: sliceKey } = accountSettingsSlice;
