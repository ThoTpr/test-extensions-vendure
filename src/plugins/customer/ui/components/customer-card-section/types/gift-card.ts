export enum GiftCardStatus {
    ACTIVE = 'ACTIVE',
    EXPIRED = 'EXPIRED',
}

export type GiftCard = {
    id: number | string;
    carrierId: number | string;
    expirationDate: Date;
    status: GiftCardStatus;
    initialAmount: number;
    remainingAmount: number;
};
