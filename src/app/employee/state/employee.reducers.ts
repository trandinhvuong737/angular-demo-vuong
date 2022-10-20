import { Employee } from '../model/employee'
import { createReducer, on } from '@ngrx/store';

import {
  retrievedEmployeeList,
  addEmployeeList,
  updateEmployeeList,
  deleteEmployeeList,
  detailEmployeeList
} from './employee.actions'



export const retrievedInitialState:ReadonlyArray<Employee> = [];
export const editInitialState:Employee = {
  id: 0,
  gender: '',
  email: '',
  lastName: '',
  phoneNumber: 0,
  age:0,
  firstName: ''
};



export const employeeReducer = createReducer(
  retrievedInitialState,
  on(retrievedEmployeeList, (state, { employees }) => {
    return employees
  }),
);

export const editEmployeeReducer = createReducer(
  editInitialState,
  on(addEmployeeList, (state, { employees }) => {
    return employees
  }),
  on(updateEmployeeList, (state, { employees }) => {
    return employees
  }),

);
