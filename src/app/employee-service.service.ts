import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { Employee } from './employee';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EmployeeServiceService {

  url = `${environment.apiUrl}/employee`;

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url, httpOptions);
  }


  /** GET Employee by id. Will 404 if id not found */
  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${id}`).pipe(
      catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
  }

  /** POST: add a new Employee to the server */
  addEmployee(employee: any) {
    return this.http.post<any>(`${this.url}/add`, employee, httpOptions)
  }

  /** DELETE: delete the Employee from the server */
  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.url}/${id}`, httpOptions).pipe(
      catchError(this.handleError<Employee>('deleteEmployee'))
    );
  }

  /** PUT: update the Employee on the server */
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.url}/update`, employee, httpOptions).pipe(
      catchError(this.handleError<Employee>('updateEmployee'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
