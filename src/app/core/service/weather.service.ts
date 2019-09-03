import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    const url = `${environment.apiUrl.weather}`;
    const getParams = new HttpParams()
      .set('q', 'Madrid')
      .set('cnt', '7')
      .set('units', 'metric')
      .set('APPID', environment.apiKey);
    return this.http.get<any>(url, { params: getParams });
  }
}
