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
    partnersSelected:boolean = false;
    detailsSelected: boolean = false;
    companyOpen: boolean = false;

    unselctAll()
    {
        this.isCompanySettings = false;
        this.isInvoices = false;
        this.isSettings = false;
        this.partnersSelected = false;
        this.detailsSelected = false;
        this.companyOpen = false;
    }
}