import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder) { }

  checkoutForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    phoneNumber: '',
    gender:''
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    var data= {firstName: this.checkoutForm.value.firstName,
          lastName:this.checkoutForm.value.lastName,
          email: this.checkoutForm.value.email,
          age:this.checkoutForm.value.age,
          phoneNumber: this.checkoutForm.value.phoneNumber,
          gender: this.checkoutForm.value.gender,
  }
    this.add(data)
    this.checkoutForm.reset();
  }

  add(employee: any): void {
    this.employeeService.addEmployee(employee).subscribe();
  }

}
