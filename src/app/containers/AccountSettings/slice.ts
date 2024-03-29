import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  ContainerState,
  UpdatedUser,
  UpdateSuccess,
  UpdatedBillingInfoSuccess,
  GetCharitiesErrorType,
} from './types';

import { Charity } from 'types/Charity';

// The initial state of the AccountSettings container
export const initialState: ContainerState = {
  id: '',
  fullName: '',
  email: '',
  role: '',
  charities: [],
  isEditing: false,
  loading: false,
  billing: {},
  error: null,
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
      state.billing.address = action.payload;
    },
    changeCity(state, action: PayloadAction<string>) {
      state.billing.city = action.payload;
    },
    changeState(state, action: PayloadAction<string>) {
      state.billing.state = action.payload;
    },
    changeZip(state, action: PayloadAction<string>) {
      state.billing.zip = action.payload;
    },
    changeCardType(state, action: PayloadAction<string>) {
      state.billing.cardType = action.payload;
    },
    changeCardNumber(state, action: PayloadAction<string>) {
      state.billing.cardNumber = action.payload;
    },
    changeExpiry(state, action: PayloadAction<string>) {
      state.billing.expiry = action.payload;
    },
    changeCvc(state, action: PayloadAction<string>) {
      state.billing.cvc = action.payload;
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
        state.billing.address = action.payload.address!;
        state.billing.city = action.payload.city!;
        state.billing.state = action.payload.state!;
        state.billing.zip = action.payload.zip!;
        state.billing.cardType = action.payload.cardType!;
        state.billing.cardNumber = action.payload.cardNumber!;
        state.billing.expiry = action.payload.expiry!;
        state.billing.cvc = action.payload.cvc!;
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
      state.billing.address = action.payload.address;
      state.billing.city = action.payload.city;
      state.billing.state = action.payload.state;
      state.billing.zip = action.payload.zip;
      state.billing.cardType = action.payload.cardType;
      state.billing.cardNumber = action.payload.cardNumber;
      state.billing.expiry = action.payload.expiry;
      state.billing.cvc = action.payload.cvc;
    },
    getCharitiesRequest(state, action: PayloadAction<String>) {
      state.loading = true;
      state.error = null;
    },
    getCharitiesSuccess(state, action: PayloadAction<Charity[]>) {
      state.loading = false;
      state.error = null;
      state.charities = action.payload;
    },
    getCharitiesError(state, action: PayloadAction<GetCharitiesErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = accountSettingsSlice;
