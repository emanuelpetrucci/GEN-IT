import { Injectable } from '@angular/core';
import { Environment } from '@front/environment';
import { DataAccessService} from './data-access.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';
import { DataAccess, HeadersHttp, Methods } from './interfaces/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientBaseService {

  url: string;
  headers: HttpHeaders = new HttpHeaders();

  constructor(public env: Environment, public _dataAccessService: DataAccessService) {
      this.setHeaders();
      this.url = this.env.appUrls.ibisdev;
  }

  setHeaders(headers: HeadersHttp[] = []) {
    // TODO a token should be defined
    const token = this._dataAccessService.getBearerToken();
    let httpHeaders = new HttpHeaders();
    if (isNotNullOrUndefined(token) && typeof token === 'string') {
      httpHeaders = httpHeaders.set('Authorization', token);
      if (isNotNullOrUndefined(headers) && headers.length > 0)
      headers.forEach((item: HeadersHttp) => httpHeaders = httpHeaders.set(item.set, item.value))
    }else {
      httpHeaders.delete('Authorization');
    }
    return httpHeaders;
  }

  prepare(request: DataAccess): DataAccess{
    request.url = this.url + request.url;
    if (isNotNullOrUndefined(request.queryParams))
    {
      request.url = request.url+'?';
      for (const params in request.queryParams)
      {
        if (request.queryParams.hasOwnProperty(params) && isNotNullOrUndefined(request.queryParams[params]))
        {
          request.url = request.url+params+'='+request.queryParams[params]+'&';
        }
      }
      request.url = request.url.substring(0, request.url.length - 1);
    }
    request.headers = this.setHeaders(request.setHaders);
    return request;
  }

  httpGet(request: DataAccess):Observable<object>{
    request = this.prepare(request);
    request.method = Methods.get;
    return this._dataAccessService.execute(request);
  }

  httpPost(request: DataAccess):Observable<object>{
    request = this.prepare(request);
    request.method = Methods.post;
    return this._dataAccessService.execute(request);
  }

  httpDelete(request: DataAccess):Observable<object> {
    request = this.prepare(request);
    request.method = Methods.delete;
    return this._dataAccessService.execute(request);
  }

  httpPut(request: DataAccess):Observable<object> {
    request = this.prepare(request);
    request.method = Methods.put;
    return this._dataAccessService.execute(request);
  }
}
