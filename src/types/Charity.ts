export interface Charity {
  id: string;
  name: string;
  logo: string;
  mission: string;
  city: string;
  state: string;
  summary: string;
  lastYearRevenue: lastYearRevenue;
  website: string;
  connectedStripeId: string;
  categories: string[];
  ein: string;
  isDeleted: boolean;
}

export interface lastYearRevenue {
  revenue: number;
  otherInfo: string[];
}

export interface StripeCode {
  code: string;
  email: string;
}
