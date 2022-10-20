import {Component, Input} from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeService} from "../service/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() employees: Array<Employee> = [];

  constructor(private employeeService: EmployeeService) {
  }
  delete(employee: Employee): void {
      this.employees = this.employees.filter(e => e !== employee);
      this.employeeService.deleteEmployee(employee.id).subscribe();
    }
}
