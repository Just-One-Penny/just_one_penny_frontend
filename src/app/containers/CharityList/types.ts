import { Charity } from 'types/Charity';

/* --- STATE --- */
export interface CharityListState {
  charities: Charity[];
  loading: boolean;
  error?: null;
}

export type ContainerState = CharityListState;
