import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellClickedEvent,
  ColDef,
  ColumnStateParams,
  GridReadyEvent,
  IServerSideDatasource,
  IServerSideGetRowsRequest,
  RowModelType,
 } from 'ag-grid-community';

import { EmployeeService } from '../employee/service/employee.service';
import { Employee } from '../employee/model/employee'

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  employee: Employee ={
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    phoneNumber: 0,
    age: 0
  }
  sort:ColumnStateParams | undefined
  ngOnInit(): void {
  }

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'firstName' },
    { field: 'lastName' },
    { field: 'age' },
    { field: 'phoneNumber' },
    { field: 'gender' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
    resizable: true,
  };

  public rowBuffer = 0;
  public cacheBlockSize = 50;
  public maxBlocksInCache = 2;

  public rowModelType: RowModelType = 'serverSide';

  // Data that gets displayed in the grid
  public rowData$!: Employee[];

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(
    private http: HttpClient,
    private employeeService: EmployeeService,
  ) { }

  // Example load data from sever
  onGridReady(params: GridReadyEvent<Employee[]>) {
    this.employeeService.getAllEmployees()
      .subscribe((data) => {
        // setup the fake server with entire dataset
        var fakeServer = this.createFakeServer(data);
        // create datasource with a reference to the fake server
        var datasource = this.createServerSideDatasource(fakeServer);
        // register the datasource with the grid
        params.api!.setServerSideDatasource(datasource);
      });

  }
  public test : Employee | undefined;
  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked',e );
    this.employee.id=e.data.id;
    console.log(this.employee.id);
  }


  createServerSideDatasource(server: any): IServerSideDatasource {
    return {
      getRows: (params) => {
        console.log(
          '[Datasource] - rows requested by grid: startRow = ' +
          params.request.startRow +
          ', endRow = ' +
          params.request.endRow
        );
        // get data for request from our fake server
        var response = server.getData(params.request);
        // simulating real server call with a 500ms delay
        setTimeout(function () {
          if (response.success) {
            // supply rows for requested block to grid
            params.success({
              rowData: response.rows,
              rowCount: response.lastRow,
            });
          } else {
            params.fail();
          }
        }, 1000);
      },
    };
  }
  createFakeServer(allData: any[]) {
    return {
      getData: (request: IServerSideGetRowsRequest) => {
        // in this simplified fake server all rows are contained in an array
        var requestedRows = allData.slice(request.startRow, request.endRow);

        // here we are pretending we don't know the last row until we reach it!
        var lastRow = this.getLastRowIndex(request, requestedRows);

        return {
          success: true,
          rows: requestedRows,
          lastRow: lastRow,
        };
      },
    };
  }
  getLastRowIndex(request: IServerSideGetRowsRequest, results: any[]) {
    if (!results) return undefined;
    var currentLastRow = (request.startRow || 0) + results.length;
    // if on or after the last block, work out the last row, otherwise return 'undefined'
    return currentLastRow < (request.endRow || 0) ? currentLastRow : undefined;
  }
}
