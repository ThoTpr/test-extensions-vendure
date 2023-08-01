import { GiftCardStatus } from '@/common/enums/gift-card-status';
import { GiftCardType } from '@/common/enums/gift-card-type';
import { type GiftCardDetail } from '@/common/types/gift-card-detail';
import type { GiftCardHistory } from '@/common/types/gift-card-history';
import type { GiftCardList } from '../../common/types/gift-card-list';

const mockedData: GiftCardList = {
    totalItems: 1,
    currentPage: 1,
    itemsPerPage: 5,
    items: [
        {
            id: 1,
            buyerId: 1,
            carrierId: 1,
            expirationDate: new Date(),
            initialAmount: 2000,
        },
        {
            id: 2,
            buyerId: 2,
            carrierId: 2,
            expirationDate: new Date(),
            initialAmount: 2000,
        },
        {
            id: 3,
            buyerId: 1,
            carrierId: 3,
            expirationDate: new Date(),
            initialAmount: 2000,
        },
        {
            id: 4,
            buyerId: 3,
            carrierId: 1,
            expirationDate: new Date(),
            initialAmount: 2000,
        },
        {
            id: 5,
            buyerId: 1,
            carrierId: 2,
            expirationDate: new Date(),
            initialAmount: 2000,
        },
        {
            id: 6,
            buyerId: 1,
            carrierId: 3,
            expirationDate: new Date(),
            initialAmount: 2000,
        },
        {
            id: 7,
            buyerId: 2,
            carrierId: 1,
            expirationDate: new Date(),
            initialAmount: 2000,
        },
        {
            id: 8,
            buyerId: 1,
            carrierId: 2,
            expirationDate: new Date(),
            initialAmount: 2000,
        },
        {
            id: 9,
            buyerId: 1,
            carrierId: 3,
            expirationDate: new Date(),
            initialAmount: 2000,
        },
        {
            id: 10,
            buyerId: 4,
            carrierId: 1,
            expirationDate: new Date(),
            initialAmount: 2000,
        },
        {
            id: 11,
            buyerId: 1,
            carrierId: 2,
            expirationDate: new Date(),
            initialAmount: 2000,
        },
        {
            id: 12,
            buyerId: 7,
            carrierId: 3,
            expirationDate: new Date(),
            initialAmount: 2000,
        },
    ],
};

const cardHistory: GiftCardHistory[] = [
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
    {
        transactionStatusCode: 'created',
        date: new Date(),
        amount: 5000,
        cardId: '1',
    },
    {
        transactionStatusCode: 'spent',
        date: new Date(),
        amount: 1300,
        store: {
            city: 'Test',
            country: 'Test',
            label: 'Test',
            postalCode: 'Test',
            street: 'test',
        },
        cardId: '1',
    },
];

export const GiftCardService = {
    getCardListData(
        { currentPage, numberOfRows }: any,
        sortParams?: any,
        cardsFiltersParams?: any,
    ): Promise<GiftCardList> {
        let data = mockedData;
        if (cardsFiltersParams) {
            data = {
                ...mockedData,
                items: mockedData.items.filter(
                    (item: any) =>
                        item.buyerId === +cardsFiltersParams || item.carrierId === +cardsFiltersParams,
                ),
            };
        }

        return Promise.resolve({
            totalItems: data.items.length,
            currentPage: currentPage,
            itemsPerPage: numberOfRows,
            items: data.items.slice(currentPage * numberOfRows, currentPage * numberOfRows + numberOfRows),
        });
    },

    getGiftCardById(id: number): Promise<GiftCardDetail> {
        return Promise.resolve({
            id,
            buyerId: 1,
            carrierId: 1,
            expirationDate: new Date(),
            initialAmount: 2000,
            createdAt: new Date(),
            isExpirationNotificationEnabled: true,
            lastTestSync: new Date(),
            plannedActivationDate: new Date(),
            cardBalance: 1000,
            status: GiftCardStatus.ACTIVE,
            updatedAt: new Date(),
            activatedAt: new Date(),
            amountAtActivation: 2000,
            amountAtOpposition: 0,
            cardType: GiftCardType.PYSHICAL,
            orderId: '1234',
        } as GiftCardDetail);
    },

    getCardHistory(id: number) {
        return Promise.resolve(cardHistory);
    },
};
