import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomDetailComponent } from '@vendure/admin-ui/core';
import { Observable } from 'rxjs';
import { CustomerCardSectionUiExtensionService } from '../../services/customer-card-section-ui-extension.service';
import type { GiftCard } from './types/gift-card';

@Component({
    templateUrl: './customer-card-section-ui-extension.component.html',
    styleUrls: ['./customer-card-section-ui-extension.component.scss'],
})
export class CustomerCardSectionUiExtensionComponent implements CustomDetailComponent, OnInit {
    constructor(
        private customerCardSectionService: CustomerCardSectionUiExtensionService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}
    entity$: Observable<any>;
    cards: GiftCard[];
    totalItems: number;
    detailForm: FormGroup;
    customerId: string;

    ngOnInit(): void {
        this.customerId = this.route.snapshot.params['id'];
        this.entity$ = this.customerCardSectionService.getCustomerCards(this.customerId);
        this.entity$.subscribe(data => {
            this.cards = data.items;
            this.totalItems = data.totalItems;
        });
    }

    goToCardList() {
        this.router.navigate(['../../extensions/card-page/customer/' + this.customerId]);
    }
}
