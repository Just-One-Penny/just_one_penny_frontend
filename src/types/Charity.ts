export interface Charity {
  name: string;
  logo: string;
  mission: string;
  city: string;
  state: string;
  summary: string;
  lastYearRevenue: number /*left just as revenue number couldnt think of how to contain a dictionary*/;
  website: string;
  stripeCustomerRef: string;
  categories: string[];
  isDeleted: boolean;
}
