import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { hostExternalFrame } from '@vendure/admin-ui/core';

@NgModule({
    imports: [
        RouterModule.forChild([
            hostExternalFrame({
                path: 'customer/:slug',
                breadcrumbLabel: 'Card page',
                extensionUrl: './assets/card-page/index.html',
                // extensionUrl: "http://localhost:5173/admin/extensions/card-page/customer",
                openInNewTab: false,
            }),
        ]),
    ],
})
export class CardPageModule {}
