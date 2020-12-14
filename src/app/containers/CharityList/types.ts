import { Charity } from 'types/Charity';

/* --- STATE --- */
export interface CharityListState {
  charities: Charity[];
  loading: boolean;
  error?: GetCharitiesErrorType | null;
  search: Object | null;
}

export enum GetCharitiesErrorType {
  GENERAL_ERROR = 1,
}

export type ContainerState = CharityListState;
