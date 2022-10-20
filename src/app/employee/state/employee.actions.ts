import { createAction, props } from "@ngrx/store";

import { Employee } from "../model/employee";

export const retrievedEmployeeList = createAction(
  '[Employee List/API] Retrieve Employee Success',
  props<{ employees: ReadonlyArray<Employee>}>()
);

export const addEmployeeList = createAction(
  '[Employee Action] Add Employee Success',
  props<{ employees: Employee}>()
);

export const updateEmployeeList = createAction(
  '[Employee Action] Update Employee Success',
  props<{ employees: Employee}>()
);

export const deleteEmployeeList = createAction(
  '[Employee Action] Delete Employee Success',
  props<{ id: number}>()
);

export const detailEmployeeList = createAction(
  '[Employee Action] Detail Employee',
  props<{ id: number}>()
);


