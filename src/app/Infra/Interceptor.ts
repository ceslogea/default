import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const baseURL = 'http://localhost:53455/api';
    const apiReq = req.clone({ url: `${baseURL}/${req.url}` });
    return next.handle(apiReq);
  }
}
