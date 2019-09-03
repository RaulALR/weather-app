import { Injectable } from '@angular/core';
import { ofType, Effect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { WeatherService } from '../../core/service/weather.service';
import { IAppState } from '../app.state';
import { IWeatherHttp } from '../../models/IWeatherHttp';
import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { EDailyWeatherActions, GetDailyWeather, GetDailyWeatherSuccess, GetDailyWeatherError } from './daily-weather.actions';

@Injectable()
export class DailyWeatherEffects {
    @Effect()
    protected getDailyWeather$ = this.actions$.pipe(
        ofType<GetDailyWeather>(EDailyWeatherActions.GetDailyWeather),
        map(res => res),
        switchMap((action) => {
            return this.weatherService.getDailyWeather(action.payload).pipe(
                map((res) => {
                    return new GetDailyWeatherSuccess(res);
                },
                    (error) => new GetDailyWeatherError(error))
            );
        }));

    constructor(
        private store: Store<IAppState>,
        private weatherService: WeatherService,
        private actions$: Actions,
    ) { }
}
// switchMap(() => this.weatherService.getWeather(),
        //     switchMap((weatherHttp: IWeatherHttp) => of(new GetWeatherSuccess(weatherHttp)))

        // ).catchError((error) => new GetWeatherError(error));
