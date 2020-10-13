import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { ServiceHttp } from './interfaces/http';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	constructor() {
	}

	executeService(args: ServiceHttp): Observable<any> {
		return new Observable(observer => {
			args.callback(args.args).subscribe((resp) => {
					observer.next(resp);
			}, (error: any) => {
				observer.error(error);
			});
		});
	}
}
