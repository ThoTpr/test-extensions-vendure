import { NgModule } from '@angular/core';
import { SharedModule, registerCustomDetailComponent } from '@vendure/admin-ui/core';
import { CustomerOptinSectionUiExtensionComponent } from './components/customer-optin-section/customer-optin-section-ui-extension.component';
import { CustomerOptinSectionUiExtensionService } from './services/customer-optin-section-ui-extension.service';

@NgModule({
    imports: [SharedModule],
    declarations: [CustomerOptinSectionUiExtensionComponent],
    providers: [
        CustomerOptinSectionUiExtensionService,
        registerCustomDetailComponent({
            locationId: 'customer-detail',
            component: CustomerOptinSectionUiExtensionComponent,
        }),
    ],
})
export class CustomerOptinSectionUiExtensionModule {}
