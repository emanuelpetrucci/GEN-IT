import { HttpHeaders } from '@angular/common/http';

export interface DataAccess {
  url:string;
  responseType?: 'json'|'blob';
  method?:Methods;
  request?:any;
  queryParams?: object;
  headers?:HttpHeaders;
  setHaders?:HeadersHttp[];
}
export enum Methods {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete'
}
export interface HeadersHttp {
  set:string,
  value:string
}

export interface ServiceHttp {
  callback: any;
  args?: {
    id?: null|number;
    request?: any;
    queryParams?:object;
  };
}
export interface HttpArgs {
  id?: number;
  request?: object;
  queryParams?:object;
}

export interface ResponseHttp {
  code: number;
  response: any;
  status: string;
  error?: any;
}

