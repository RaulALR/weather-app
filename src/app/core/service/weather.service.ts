import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAppState } from '../../redux/app.state';
import { Store } from '@ngrx/store';
import { IWeatherParams } from '../../models/IWeatherParams';
import { IWeatherHttp } from '../../models/IWeatherHttp';
import { IWeatherDailyHttp } from '../../models/IWeatherDailyHttp';

@Injectable()
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getWeather(params: IWeatherParams): Observable<IWeatherHttp> {
    const url = `${environment.apiUrl.weather}`;
    const getParams = new HttpParams()
      .set('q', params.q)
      .set('cnt', params.cnt)
      .set('units', params.units)
      .set('APPID', params.APPID);

    return this.http.get<IWeatherHttp>(url, { params: getParams });
  }

  getDailyWeather(params?: IWeatherParams): Observable<any> {
    const url = `${environment.apiUrl.daily}`;
    const getParams = new HttpParams()
      .set('q', params.q)
      .set('cnt', params.cnt)
      .set('units', params.units)
      .set('APPID', params.APPID);

    return this.http.get<IWeatherDailyHttp>(url, { params: getParams });
  }
}
