import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { TableStripedDemoComponent } from './table-striped-demo/table-striped-demo.component';
import { DetailsComponent } from './details/details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'TableStriped', component: TableStripedDemoComponent },
  { path: 'Details/:id', component: DetailsComponent },
  { path: 'AddEmployee', component: AddEmployeeComponent },
  { path: 'UpdateEmployeeComponent/:id', component: UpdateEmployeeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
