import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CustomerOptin } from '../components/customer-optin-section/types/customer-optin';

let optin: CustomerOptin = {
    optinId: 3,
    topPersonalEmail: false,
    topPersonalEmailPartner: true,
    topPersonalEmailStudies: true,
    topProfessionalEmail: true,
    topPersonalMail: true,
    topPersonalMailPartner: true,
    topPersonalMailStudies: true,
    topProfessionalMail: true,
    topPersonalSms: true,
    topPersonalSmsPartner: true,
    topPersonalSmsStudies: true,
    topProfessionalSms: true,
    topPersonalCall: true,
    topPersonalCallPartner: true,
    topPersonalCallStudies: true,
    topProfessionalCall: true,
    topTestNewsletter: true,
    lifecycleHolderStatusCode: 'code',
    topTestNewsletterPartner: true,
    communicationId: 1,
    topSourceApplication: 'app',
};

@Injectable()
export class CustomerOptinSectionUiExtensionService {
    filterOptinKeys(optin: CustomerOptin) {
        const keysToFilter = [
            'topSourceApplication',
            'lifecycleHolderStatusCode',
            'topSourceApplication',
            'communicationId',
        ];
        const result = Object.fromEntries(
            Object.entries(optin).filter(([key]) => !keysToFilter.includes(key)),
        ) as CustomerOptin;
        return result;
    }

    private _optinData$ = new BehaviorSubject<CustomerOptin>({} as CustomerOptin);

    getOptin(): Observable<CustomerOptin> {
        return this._optinData$;
    }

    refreshOptin(optinId: number) {
        const dataToSend = this.filterOptinKeys(optin);
        this._optinData$.next(dataToSend);
    }

    updateOptin(customerId: number, updatedValue: any[]) {
        const updatedOptin: any = { ...this._optinData$.value };
        updatedOptin[updatedValue[0]] = !updatedValue[1];
        optin = updatedOptin;
        this.refreshOptin(optin.optinId);
    }
}
