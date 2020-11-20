/* --- STATE --- */
export interface DonationModalState {
  userId: string;
  charityId: string;
  loading: boolean;
  error: DonationModalError | null;
  paymentInfo: DonationSubmission | null;
}

export interface DonationSubmission {
  donationAmount: string;
  frequency: string;
  coverCost: boolean;
  support: boolean;
  amount: number;
  fullName: string;
  email: string;
  token: string;
  charityName: string;
}

export interface DonationSubmissionValues {
  donationAmount: string;
  frequency: string;
  coverCost: string[];
  support: string[];
  amount: number;
  fullName: string;
  email: string;
  token: string;
}

export interface DonationSubmitted {
  userId: string;
  charityId: string;
  amount: number;
  dateSent: Date;
  donationAmount: string;
  frequency: string;
  coverCost: boolean;
  support: boolean;
  fullName: string;
  email: string;
  token: string;
  charityName: string;
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
