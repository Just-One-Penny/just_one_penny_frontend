export interface BillingInfo {
  id: string;
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cardType: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}

export interface UpdatingBillingInfo {
  id: string;
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cardType: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}

export interface UpdatedBillingInfo {
  id: string;
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cardType: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
  createdAt?: Date;
}

// export interface CardInfo {
//   cardType: string;
//   cardNumber: string;
//   expiry: string;
//   cvc: string;
// }
