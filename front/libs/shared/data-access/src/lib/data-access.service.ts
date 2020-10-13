import { Injectable } from '@angular/core';
import { DataAccess, Methods } from './interfaces/http';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(
    public http: HttpClient
  ) {
  }

  getBearerToken(): string|void {
    // TODO a token should be defined
    // const token = sessionStorage.getItem('accessToken');
    // if (isNotNullOrUndefined(token))
    //   return 'Bearer ' + token;
  }

  execute(request: DataAccess) {
    switch (request.method) {
      case Methods.get:
        // @ts-ignore
        return this.http.get(request.url, { headers: request.headers, responseType: request.responseType ?? 'json' });
      case Methods.post:
        return this.http.post(request.url, request.request, { headers: request.headers });
      case Methods.put:
        return this.http.put(request.url, request.request, { headers: request.headers });
      case Methods.delete:
        return this.http.delete(request.url, { headers: request.headers });
    }
  }
}
