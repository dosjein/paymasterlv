import {Component} from '@angular/core'

@Component({
    selector: 'nav-bar',
    templateUrl: 'nav-bar.component.html',
    styleUrls: ['nav-bar.less']
})
export class NavBarComponent{
    isCompanySettings: boolean = false;
    isInvoices: boolean = false;
    isSettings: boolean = false;
    reportsSelected: boolean = false;
    statementsSelected: boolean = false;
    sheetsSelected: boolean = false;
    partnersSelected:boolean = false;
    detailsSelected: boolean = false;
    companyOpen: boolean = false;
    accountingSelected: boolean = false;
    transactionsSelected: boolean = false;
    chartsSelected: boolean = false;
    isSales: boolean = false;
    isPurchase: boolean = false;


    unselectAll()
    {
        this.isCompanySettings = false;
        this.isInvoices = false;
        this.isSettings = false;
        this.partnersSelected = false;
        this.detailsSelected = false;
        this.companyOpen = false;
        this.chartsSelected = false;
        this.transactionsSelected = false;
        this.accountingSelected = false;
        this.sheetsSelected = false;
        this.statementsSelected = false;
        this.reportsSelected = false;
        this.isSales = false;
        this.isPurchase = false;
    }
}