import { Injectable } from '@angular/core';
import { CommonEndpointsService } from './common-endpoints.service';
import { Pagination } from '@front/shared/data-access';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  constructor(private _commonEndpointsService: CommonEndpointsService){}

  getList(args: Pagination) {
    return this._commonEndpointsService.getList('cars',args);
  }
}
