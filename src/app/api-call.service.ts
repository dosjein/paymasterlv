import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ApiCallService{
    constructor(private http: HttpClient){}

    checkIfAuthorized(){
        let context = this;
        return context.http.get('http://paymasterlv-backend.herokuapp.com/api/v1/is_auth');
    }

    authorizeUser(){
        window.open('http://paymasterlv-backend.herokuapp.com/auth/facebook');
    }

    getCompanyDetails(){
        return this.http.get('http://paymasterlv-backend.herokuapp.com/api/v1/get_company_details');
    }

    updateCompanyDetails(company_name, registration_number, address){
        return this.http.get(`http://paymasterlv-backend.herokuapp.com/api/v1/update_company_details?company_name=${company_name}&registration_number=${registration_number}&address=${address}`);
    }

    getPartnerList(){
        return this.http.get(`http://paymasterlv-backend.herokuapp.com/api/v1/get_partner_list`);
    }

    updatePartner(id, company_name, registration_number, address, email, bankaccount){
        return this.http.get(`http://paymasterlv-backend.herokuapp.com/api/v1/update_partner_details?partner_id=${id}&partner_name=${company_name}&registration_number=${registration_number}&address=${address}&email=${email}&bank_account=${bankaccount}`);
    }

    removePartner(id: number){
        return this.http.get(`http://paymasterlv-backend.herokuapp.com/api/v1/delete_partner_details?partner_id=${id}`);
    }

    getInvoiceList(){
        return this.http.get(`http://paymasterlv-backend.herokuapp.com/api/v1/get_invoice_list`);
    }
}