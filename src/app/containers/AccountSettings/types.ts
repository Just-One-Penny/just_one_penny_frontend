/* --- STATE --- */
export interface AccountSettingsState {
  id: string;
  fullName: string;
  email: string;
  role: string;
  isEditing: boolean;
  loading: boolean;
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
