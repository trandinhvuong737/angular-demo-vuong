import { Injectable } from "@angular/core";
import { Actions,Effect,ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  map,
  mergeMap,
} from 'rxjs/operators';
import { EmployeeService } from "../service/employee.service";
import {
  retrievedEmployeeList
} from './employee.actions'

@Injectable()
export class EmployeeEffects {
  constructor(
    private employeeService: EmployeeService,
    private actions$: Actions,
  ) { };

  @Effect({ dispatch: false })
  getEmployee$ = this.actions$
    .pipe(
      ofType(retrievedEmployeeList),
      mergeMap(() => this.employeeService.getAllEmployees()
        .pipe(
          map(employee => ({ type: '[Employee List/API] Retrieve Employee Success', payload: employee })),
          catchError(() =>  of({ type: '[Employee List/API] Retrieve Employee Success' }))
        ))
      )
}

