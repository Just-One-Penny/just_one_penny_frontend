/* --- STATE --- */
export interface DonationModalState {
  userId: string;
  charityId: string;
  loading: boolean;
  success: boolean;
  error: DonationModalError | null;
  paymentInfo: DonationSubmission | null;
}

export interface DonationSubmission {
  type: string;
  frequency: string;
  coverCost: boolean;
  support: boolean;
  amount: number;
  fullName: string;
  email: string;
  token: string;
  charityId: string;
  userId: string;
}

export interface DonationSubmissionValues {
  amount: string;
  frequency: string;
  coverCost: string[];
  support: string[];
  fullName: string;
  email: string;
  token: string;
}

export interface DonationSubmitted {
  userId: string;
  charityId: string;
  amount: number;
  dateSent: Date;
  frequency: string;
  coverCost: boolean;
  support: boolean;
  fullName: string;
  email: string;
  token: string;
}

export interface DonationModalSuccess {
  userId: string;
  charityId: string;
  amount: number;
  totalDonated: number;
  dateSent: Date;
  charityName: string;
  charityLogo: string;
  type: string;
  active: boolean;
  nextDonation: Date;
}

export enum DonationModalError {
  NO_AMOUNT = 1,
}

export interface IDs {
  userId: string;
  charityId: string;
}

export type ContainerState = DonationModalState;
