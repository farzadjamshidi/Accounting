import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor
{
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    // add auth header with jwt if account is logged in and request is to the api url
    // const account = this.accountService.accountValue;
    // const isLoggedIn = account?.token;
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;

    // const isApiUrl = request.url.startsWith(environment.apiUrl);
    const isApiUrl = true;

    if (isLoggedIn && isApiUrl)
    {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${ token }` }
      });
    }

    return next.handle(request);
  }
}
