import {  createFeatureSelector } from '@ngrx/store';
import { Employee } from '../model/employee';


export const selectEmployees = createFeatureSelector<
  ReadonlyArray<Employee>
>('employees');


