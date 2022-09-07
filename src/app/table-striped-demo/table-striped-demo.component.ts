import { Component, OnInit } from '@angular/core';

import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-table-striped-demo',
  templateUrl: './table-striped-demo.component.html',
  styleUrls: ['./table-striped-demo.component.css']
})
export class TableStripedDemoComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private EmployeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee():void{
    this.EmployeeService.getEmployees().subscribe((employee:any)=>{
      this.employees = employee;
    },
    error => {
      console.log(error);
    })
  }

  add(name: string, lastname: string, email: string): void {
    name = name.trim();
    if (!name) { return; }
    this.EmployeeService.addEmployee({ firstName: name, lastName: lastname, email: email} as Employee)
      .subscribe(hero => {
        this.employees.push(hero);
      });
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(e => e !== employee);
    this.EmployeeService.deleteEmployee(employee.id).subscribe();
  }

}
