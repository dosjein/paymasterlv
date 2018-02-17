import {Component} from '@angular/core';
import { ApiCallService } from '../api-call.service';
import toast from 'devextreme/ui/toast';

@Component({
    selector: 'company-settings',
    templateUrl: 'company-settings.component.html'
})
export class CompanySettingsComponent{

    companySettings = {};

    constructor(public http: ApiCallService){

    }

    ngOnInit(){
        this.http.getCompanyDetails().subscribe(
            data=> this.companySettings = data['data']
        );

    }

    updateCompanySettings(){
        this.http.updateCompanyDetails(this.companySettings['company_name'],
             this.companySettings['registration_number'],
            this.companySettings['address'])
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