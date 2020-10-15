/* --- STATE --- */
export interface AccountSettingsState {
  id: string;
  fullName: string;
  email: string;
  role: string;
  isEditing: boolean;
  loading: boolean;
  billing: BillingInfo;
}

export interface UpdatedUser {
  id: string;
  email: string;
  fullName: string;
  role?: string;
}

export interface UpdateSuccess {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt?: Date;
}

export interface BillingInfo {
  id?: string;
  fullName?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  cardType?: string;
  cardNumber?: string;
  expiry?: string;
  cvc?: string;
}

export interface UpdatedBillingInfoSuccess {
  id: string;
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cardType: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
  createdAt?: Date;
}

export type ContainerState = AccountSettingsState;
