import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private _http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this._http.get<T>(url, this.httpOptions).pipe(
      map(d => <T>d)
      , catchError(this.handleError)
    );
  }


  post<T>(url: string, obj: any): Observable<T> {
    return this._http.post(url, obj, this.httpOptions).pipe(
      map(d => <T>d)
      , catchError(this.handleError)
    );
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}

