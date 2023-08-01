export type GiftCardHistory = {
  cardId: string;
  date: Date;
  amount?: number;
  store?: {
    label: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  };
  transactionStatusCode: string;
};
