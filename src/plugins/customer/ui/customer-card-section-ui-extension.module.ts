import { NgModule } from '@angular/core';
import { SharedModule, registerCustomDetailComponent } from '@vendure/admin-ui/core';
import { CustomerCardSectionUiExtensionComponent } from './components/customer-card-section/customer-card-section-ui-extension.component';
import { CustomerCardSectionUiExtensionService } from './services/customer-card-section-ui-extension.service';

@NgModule({
    imports: [SharedModule],
    declarations: [CustomerCardSectionUiExtensionComponent],
    providers: [
        CustomerCardSectionUiExtensionService,
        registerCustomDetailComponent({
            locationId: 'customer-detail',
            component: CustomerCardSectionUiExtensionComponent,
        }),
    ],
    exports: [],
})
export class CustomerCardSectionUiExtensionModule {}
