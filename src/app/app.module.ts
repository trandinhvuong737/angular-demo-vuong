import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableStripedDemoComponent } from './table-striped-demo/table-striped-demo.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component'
import {InputNumberModule} from 'primeng/inputnumber';
import {ChipsModule} from 'primeng/chips';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    TableStripedDemoComponent,
    NavbarComponent,
    HomeComponent,
    DetailsComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    ChipsModule,
    InputNumberModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
