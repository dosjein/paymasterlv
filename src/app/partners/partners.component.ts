import {Component} from '@angular/core';
import { ApiCallService } from '../api-call.service';
import toast from 'devextreme/ui/toast';

@Component({
    selector: 'partners',
    templateUrl: 'partners.component.html'
})
export class PartnersComponent{

    partnerList = [];

    constructor(public http: ApiCallService){

    }

    ngOnInit(){
        this.http.getPartnerList().subscribe(
            data=> this.partnerList = data[0]['data']
        );
    }

    update(e){
        var i = e.data;
        this.http.updatePartner(i.Id, i.partner_name, i.registration_number, i.address, i.email, i.bank_account)
            .subscribe(data=>{
                if(data)
                {
                    
                }
                else
                {

                }
            });
        }

        remove(e){
            var id = e.data.id;
            this.http.removePartner(id)
                .subscribe(data=>{
                    if(data)
                    {
                        
                    }
                    else
                    {
    
                    }
                });
            }
        insert(e){
            var i = e.data;
            this.http.updatePartner(0, i.partner_name, i.registration_number, i.address, i.email, i.bank_account)
            .subscribe(data=>{
                if(data)
                {
                    
                }
                else
                {

                }
            });
            }
}