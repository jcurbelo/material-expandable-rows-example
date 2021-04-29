import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ExpandableTableGroupDataSource, ExpandableTableGroupItem } from 'src/app/expandable-table-expansion-panels/expandable-table-expansion-panels-datasource';
import { ExpandableTableItem } from 'src/app/expandable-table/expandable-table-datasource';

@Component({
  selector: 'app-expandable-table-expansion-panels',
  templateUrl: './expandable-table-expansion-panels.component.html',
  styleUrls: ['./expandable-table-expansion-panels.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpandableTableExpansionPanelsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ExpandableTableGroupItem>;
  dataSource: ExpandableTableGroupDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  expandedElement: ExpandableTableGroupItem | null;

  ngOnInit() {
    this.dataSource = new ExpandableTableGroupDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}



