import { CompanySettingsComponent } from "../company-settings/company-settings.component";
import {DashboardComponent} from '../dashboard/dashboard.component';
import {PartnersComponent} from '../partners/partners.component';
import { PurchaseInvoicesComponent } from "../invoices/purchase-invoices.component";

export const AppRoutes = [
    {
        path: 'company-settings',
        component: CompanySettingsComponent
    },
    {
        path: 'partners',
        component: PartnersComponent
    },
    {
        path: 'purchase-invoices',
        component: PurchaseInvoicesComponent
    },
    {
        path: '',
        component: DashboardComponent,
        useAsDefault: true
    }
];
