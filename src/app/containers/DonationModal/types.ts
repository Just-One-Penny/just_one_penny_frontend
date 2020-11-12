/* --- STATE --- */
export interface DonationModalState {
  userId: string;
  charityId: string;
  amount: number;
  loading: boolean;
  error: DonationModalError | null;
}

export interface DonationSubmitted {
  userId: string;
  charityId: string;
  amount: number;
  dateSent: Date;
}

export interface DonationModalSuccess {
  userId: string;
  charityId: string;
  amount: number;
  dateSent: Date;
  stripeChargeId?: string;
  refunded: boolean;
  anonymous: boolean;
}

export enum DonationModalError {
  NO_AMOUNT = 1,
}

export interface IDs {
  userId: string;
  charityId: string;
}

export type ContainerState = DonationModalState;
