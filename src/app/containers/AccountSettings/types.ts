import { Charity } from 'types/Charity';
/* --- STATE --- */
export interface AccountSettingsState {
  id: string;
  fullName: string;
  email: string;
  role: string;
  charities: Charity[];
  isEditing: boolean;
  loading: boolean;
  error?: GetCharitiesErrorType | null;
}

export enum GetCharitiesErrorType {
  GENERAL_ERROR = 1,
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

export type ContainerState = AccountSettingsState;
