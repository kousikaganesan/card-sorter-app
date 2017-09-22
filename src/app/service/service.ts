import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { DOMAIN } from '../domain/domain.constant'
import { Headers, RequestOptions } from '@angular/http';
import { DomainInterface } from '../domain/domain.interface';
@Injectable()
export class ToDoService {
   
    constructor(public http: Http, @Inject(DOMAIN) private domain: DomainInterface) { }
    getList() : Observable<any>{
        return this.http.get( this.domain.DOMAIN)
            .map((res: Response) => res.json())
            .catch(this.handleError);
   
    }

    updateList(id: any, name: any): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });                 
            return this.http.put( this.domain.DOMAIN + '/update/' + id + '/' + name  , options)
            .map((res: Response) => {
                res.json();
            }
            )
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
