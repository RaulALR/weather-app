import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class WeatherInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // let newRequest = request.clone();
        // debugger
        // if (request.url === environment.apiUrl.weather) {
        //     newRequest = newRequest.params.set('APPID', environment.apiKey);
        // }
        return next.handle(request);

    }
}
