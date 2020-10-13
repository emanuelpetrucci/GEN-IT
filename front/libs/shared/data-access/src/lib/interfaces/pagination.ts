export interface Pagination {
  page?: PaginationPage;
  id?:number;
  queryParams?:object;
}
export interface PaginationPage {
  page: number
}
