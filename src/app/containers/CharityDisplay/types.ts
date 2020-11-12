import { Charity } from 'types/Charity';

/* --- STATE --- */
export interface CharityDisplayState {
  id: string;
  charity: Charity | null;
  loading: boolean;
  error?: GetCharityErrorType | null;
}

export enum GetCharityErrorType {
  GENERAL_ERROR = 1,
}

export type ContainerState = CharityDisplayState;
