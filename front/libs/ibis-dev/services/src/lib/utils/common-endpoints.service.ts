import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataAccess, HttpArgs, HttpClientService, Pagination } from '@front/shared/data-access';

@Injectable({
  providedIn: 'root'
})

export class CommonEndpointsService {
  request: DataAccess;
  constructor(
    private _httpClientService: HttpClientService,
    public http: HttpClient
  ){}

  getList(baseUrl,args: Pagination) {
    this.request = {
      url: baseUrl+'/list',
      queryParams: { ...args.page, ...args.queryParams }
    };
    return this._httpClientService.httpGet(this.request);
  }

  store(baseUrl, arg: HttpArgs) {
    this.request = {
      url: baseUrl+'/create',
      request: arg.request
    };
    return this._httpClientService.httpPost(this.request);
  }
  update(baseUrl, arg: HttpArgs) {
    this.request = {
      url: baseUrl+'/'+ arg.id,
      request: arg.request
    };
    return this._httpClientService.httpPut(this.request);
  }

  delete(baseUrl, arg: HttpArgs) {
    this.request = {
      url: baseUrl+'/'+ arg.id
    };
    return this._httpClientService.httpDelete(this.request);
  }
  get(baseUrl, arg: HttpArgs) {
    this.request = {
      url: baseUrl+'/'+ arg.id
    };
    return this._httpClientService.httpGet(this.request);
  }
}
