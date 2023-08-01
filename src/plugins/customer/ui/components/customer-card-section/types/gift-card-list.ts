import { GiftCard } from './gift-card';

export type GiftCardList = {
    totalItems: number;
    currentPage: number;
    items: GiftCard[];
};
