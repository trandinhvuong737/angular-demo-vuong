import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from "./employee";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const employees: Employee[] = [
      { id:1, firstName: 'Vuong', lastName: 'Dr. Nice', email:'Vuong@Gmail.com',gender :'nam',phoneNumber:123456789 ,age: 12},
      { id:2, firstName: 'Hung', lastName: 'Bombasto',email:'Hung@Gmail.com',gender :'nam',phoneNumber:123456789 ,age: 16 },
      { id:3, firstName: 'Mai', lastName: 'Celeritas',email:'Mai@Gmail.com',gender :'nu',phoneNumber:123456789 ,age: 19 },
      { id:4, firstName: 'Dao', lastName: 'Magneta',email:'Dao@Gmail.com',gender :'nu',phoneNumber:123456789 ,age: 22 },
      { id:5, firstName: 'Nhan', lastName: 'RubberMan',email:'Nhan@Gmail.com',gender :'nam',phoneNumber:123456789 ,age: 32 },
      { id:6, firstName: 'Nghia', lastName: 'Dynama',email:'Nghia@Gmail.com',gender :'nam',phoneNumber:123456789 ,age: 15 },
      { id:7, firstName: 'Yen', lastName: 'Dr. IQ',email:'Yen@Gmail.com',gender :'nu',phoneNumber:123456789 ,age: 12 },
      { id:8, firstName: 'Tung', lastName: 'Magma',email:'Tung@Gmail.com',gender :'nam',phoneNumber:123456789 ,age: 31 },
      { id:9, firstName: "khuong", lastName: 'Tornado' ,email:'Khuong@Gmail.com',gender :'nam',phoneNumber:123456789 ,age: 28},
      { id:10, firstName: "Bao", lastName: 'Horodado' ,email:'Bao@Gmail.com',gender :'nam',phoneNumber:123456789 ,age: 17}
    ];
    return {employees};
  }
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 11;
  }
}
