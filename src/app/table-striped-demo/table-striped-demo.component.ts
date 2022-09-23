import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee/service/employee.service';
import { Employee } from '../employee/model/employee';

@Component({
  selector: 'app-table-striped-demo',
  templateUrl: './table-striped-demo.component.html',
  styleUrls: ['./table-striped-demo.component.css']
})
export class TableStripedDemoComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private EmployeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee():void{
    this.EmployeeService.getAllEmployees().subscribe((employee:Employee[])=>{
      this.employees = employee;
    },
    error => {
      console.log(error);
    })
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(e => e !== employee);
    this.EmployeeService.deleteEmployee(employee.id).subscribe();
  }

}
