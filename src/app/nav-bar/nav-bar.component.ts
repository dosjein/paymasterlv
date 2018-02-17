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
}