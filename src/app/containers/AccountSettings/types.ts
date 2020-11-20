import { Charity } from 'types/Charity';
/* --- STATE --- */
export interface AccountSettingsState {
  id: string;
  fullName: string;
  password: string;
  oldPassword: string;
  email: string;
  role: string;
  charities: Charity[];
  isEditing: boolean;
  loading: boolean;
  billing: BillingInfo;
  error?: GetCharitiesErrorType | null;
}

export enum GetCharitiesErrorType {
  GENERAL_ERROR = 1,
}

export interface UpdatePassword {
  userId: string;
  password: string;
  oldPassword: string;
}

export interface UpdateUser {
  id: string;
  email: string;
  fullName: string;
  role: string;
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
