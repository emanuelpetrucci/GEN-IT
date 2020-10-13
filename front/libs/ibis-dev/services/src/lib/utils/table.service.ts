import { Injectable, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from '@front/shared/data-access';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})

export class TableService {
  get maxSize(): number {
    return this._maxSize;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
  }

  set list(value: any[]) {
    // @ts-ignore
    this._list = value;
  }

  get pageIndex(): number {
    return this._pageIndex;
  }

  get list() {
    return this._list;
  }

  get dataSource() {
    return this._dataSource;
  }

  get total_item() {
    return this._total_item;
  }

  private _maxSize = 30;
  private _list = [];
  private _emptyList = true;
  private _total_item = 0;
  private _dataSource: any;
  private _pageIndex: number;
  private _pageSize = 6;
  private _pages: Map<number, object> = new Map<number, object>();
  fn: any;
  pagination: Pagination = { page: { page: 1 } };
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {
  }

  getService(callback): Observable<object | boolean> {
    return new Observable(observer => {
      this.fn = callback;
      callback({ ...this.pagination }).subscribe((resp) => {
        this._total_item = resp.total;
        this._list = resp.data;
        this._pages.set(this.pagination.page.page, this._list);
        this.setTable();
        observer.next(resp);
      }, (error) => {
        observer.error(error);
      }, () => {
        observer.complete();
      });
    });
  }

  setTable() {
    this._dataSource = new MatTableDataSource(this._list);
    this._dataSource.paginator = this.paginator;
    this._emptyList = this._list.length === 0;
  }

  handlePage(e: PageEvent) {
    this.pagination = { page: { page: e.pageIndex + 1 }};
    this.getService(this.fn).subscribe(() => {
      this._pageIndex = e.pageIndex;
    }, () => {
      // TODO define
    });
  }
}
