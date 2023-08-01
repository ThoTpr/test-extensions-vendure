import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GiftCardStatus } from '../components/customer-card-section/types/gift-card';
import { GiftCardList } from '../components/customer-card-section/types/gift-card-list';

@Injectable()
export class CustomerCardSectionUiExtensionService {
    getCustomerCards(customerId: string): Observable<GiftCardList> {
        return of({
            totalItems: 1,
            currentPage: 1,
            items: [
                {
                    id: 1,
                    carrierId: 1,
                    expirationDate: new Date(),
                    status: GiftCardStatus.ACTIVE,
                    initialAmount: 2000,
                    remainingAmount: 1000,
                },
            ],
        });
    }
}
