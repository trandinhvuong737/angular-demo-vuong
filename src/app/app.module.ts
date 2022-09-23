import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableStripedDemoComponent } from './table-striped-demo/table-striped-demo.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './employee/details/details.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component'
import {InputNumberModule} from 'primeng/inputnumber';
import {ChipsModule} from 'primeng/chips';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import 'ag-grid-enterprise';

@NgModule({
  declarations: [
    AppComponent,
    TableStripedDemoComponent,
    NavbarComponent,
    HomeComponent,
    DetailsComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    DataGridComponent,
  ],
  imports: [
    AgGridModule,
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
