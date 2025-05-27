import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONSTANTS } from './Constants';

@Injectable()
export class Interceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem(CONSTANTS.TOKEN);

        if (token) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization',
                    'Bearer ' + token)
            });

            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}
