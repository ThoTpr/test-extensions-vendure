import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';

import path from 'path';
import { CustomerExtensionService } from './api/customer-extension.service';
import { CustomerRestExtensionController } from './api/customer-rest-extension.controller';
import { CustomerChannel } from './entities/customer-channel.entity';

@VendurePlugin({
    imports: [PluginCommonModule],
    entities: [CustomerChannel],
    controllers: [CustomerRestExtensionController],
    providers: [CustomerExtensionService],
    adminApiExtensions: {},
})
export class CustomerDetailUiExtensionPlugin {
    static uiExtensions: AdminUiExtension = {
        extensionPath: path.join(__dirname, 'ui'),
        translations: {
            fr: path.join(__dirname, '../common/translations/*.fr.json'),
            en: path.join(__dirname, '../common/translations/*.en.json'),
        },
        ngModules: [
            {
                type: 'shared',
                ngModuleFileName: 'customer-optin-section-ui-extension.module.ts',
                ngModuleName: 'CustomerOptinSectionUiExtensionModule',
            },
        ],
    };
}
