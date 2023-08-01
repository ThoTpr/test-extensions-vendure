export type GiftCardList = {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  items: {
    id: number | string;
    buyerId: number | string;
    carrierId: number | string;
    expirationDate: Date;
    initialAmount: number;
  }[];
};
