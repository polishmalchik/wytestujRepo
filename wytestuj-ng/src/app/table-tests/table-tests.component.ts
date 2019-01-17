import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableTestsDataSource } from './table-tests-datasource';

@Component({
  selector: 'app-table-tests',
  templateUrl: './table-tests.component.html',
  styleUrls: ['./table-tests.component.css'],
})
export class TableTestsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableTestsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TableTestsDataSource(this.paginator, this.sort);
  }
}
