import { PayloadAction } from '@reduxjs/toolkit';
import { UpdatedBillingInfo } from 'types/Stripe';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  ContainerState,
  UpdatedUser,
  UpdateSuccess,
  UpdatedBillingInfoSuccess,
} from './types';
// The initial state of the AccountSettings container
export const initialState: ContainerState = {
  id: '',
  fullName: '',
  email: '',
  role: '',
  isEditing: false,
  loading: false,
  address: '',
  city: '',
  state: '',
  zip: '',
  cardType: '',
  cardNumber: '',
  expiry: '',
  cvc: '',
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
    changeAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    changeState(state, action: PayloadAction<string>) {
      state.state = action.payload;
    },
    changeZip(state, action: PayloadAction<string>) {
      state.zip = action.payload;
    },
    changeCardType(state, action: PayloadAction<string>) {
      state.cardType = action.payload;
    },
    changeCardNumber(state, action: PayloadAction<string>) {
      state.cardNumber = action.payload;
    },
    changeExpiry(state, action: PayloadAction<string>) {
      state.expiry = action.payload;
    },
    changeCvc(state, action: PayloadAction<string>) {
      state.cvc = action.payload;
    },
    changeIsEditingPayment(
      state,
      action: PayloadAction<UpdatedBillingInfoSuccess | boolean>,
    ) {
      if (typeof action.payload == 'boolean') {
        state.isEditing = action.payload;
      } else {
        state.id = action.payload.id!;
        state.fullName = action.payload.fullName!;
        state.email = action.payload.email!;
        state.address = action.payload.address!;
        state.city = action.payload.city!;
        state.state = action.payload.state!;
        state.zip = action.payload.zip!;
        state.isEditing = !state.isEditing;
      }
    },
    updatePayment(state) {
      state.loading = true;
    },
    updatePaymentSuccess(
      state,
      action: PayloadAction<UpdatedBillingInfoSuccess>,
    ) {
      state.isEditing = false;
      state.loading = false;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.zip = action.payload.zip;
      state.cardType = action.payload.cardType;
      state.cardNumber = action.payload.cardNumber;
      state.expiry = action.payload.expiry;
      state.cvc = action.payload.cvc;
    },
  },
});

export const { actions, reducer, name: sliceKey } = accountSettingsSlice;
