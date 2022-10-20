import { Component, Input, OnInit } from '@angular/core';

import { Employee } from '../employee/model/employee';
import {selectEmployees} from "../employee/state/employee.selectors";
import {Store} from "@ngrx/store";
import { EmployeeService } from '../employee/service/employee.service';
import {retrievedEmployeeList} from "../employee/state/employee.actions";


@Component({
  selector: 'app-table-striped-demo',
  templateUrl: './table-striped-demo.component.html',
  styleUrls: ['./table-striped-demo.component.css']
})
export class TableStripedDemoComponent implements OnInit {
  employees$ = this.store.select(selectEmployees);
  employees:Array<Employee>=[]

  constructor(
    private store: Store,
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.employees$.subscribe(employees => {
      this.employees = [...employees];
    });
    this.employeeService
    .getAllEmployees()
    .subscribe((employees) => this.store.dispatch(retrievedEmployeeList({ employees })));
  }



}
