import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ResponseModel } from '../models/Response.model';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            try {
              const responseModel: ResponseModel = event.body;
              if (responseModel.payload) {
                return event.clone({
                  body: responseModel.payload
                });
              } else {
                return event;
              }
            } catch (e) {
              throw new Error(e);
            }
          }
        }),
        catchError(error => {
          switch (error.status) {
            case 400:
                return throwError(error);
            case 401:
                return throwError(error);
            case 404:
                return throwError(error);
            case 500:
                return throwError(error);
            default:
                return throwError(error);
          }
        }));
    }
}