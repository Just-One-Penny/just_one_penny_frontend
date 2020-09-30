export interface Charity {
  name: string;
  logo: string;
  mission: string;
  city: string;
  state: string;
  summary: string;
  lastYearRevenue: lastYearRevenue;
  website: string;
  stripeCustomerRef: string;
  categories: string[];
  isDeleted: boolean;
}

export interface lastYearRevenue {
  revenue: number;
  otherInfo: string[];
}