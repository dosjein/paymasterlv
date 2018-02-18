import {Component} from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
    selector: 'purchase-invoices',
    templateUrl: 'purchase-invoices.component.html'
})
export class PurchaseInvoicesComponent{

    invoices = [];
    showInvoice: boolean = false;

    constructor(public http: ApiCallService){
        
    }

    ngOnInit(){
        this.http.getInvoiceList().subscribe(
            data=>{
                this.invoices = data[0]['data'];
            }
        );
    }

    openInvoice(e){
        this.showInvoice = true;
    }
}