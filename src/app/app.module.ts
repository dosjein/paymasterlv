import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ApiCallService } from './api-call.service';
import { AppRoutingModule } from './/app-routing.module';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './Routes/app.router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DxFormModule, DxButtonModule, DxDataGridModule, DxPopupModule } from 'devextreme-angular';
import { PartnersComponent } from './partners/partners.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PurchaseInvoicesComponent } from './invoices/purchase-invoices.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanySettingsComponent,
    DashboardComponent,
    PartnersComponent,
    NavBarComponent,
    PurchaseInvoicesComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DxFormModule,
    DxButtonModule,
    DxDataGridModule,
    DxPopupModule
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
