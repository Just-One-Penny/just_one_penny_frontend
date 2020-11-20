export interface DonationSubmitted {
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
