import { Injectable } from '@angular/core';
import { Environment } from '@front/environment';
import { DataAccessService } from './data-access.service';
import { HttpClientBaseService } from './http-client-base.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService extends HttpClientBaseService{
  constructor(public env: Environment, public _dataAccessService: DataAccessService) {
      super(env,_dataAccessService);
  }
}
