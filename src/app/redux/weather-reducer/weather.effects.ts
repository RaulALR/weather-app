import { Injectable } from '@angular/core';
import { ofType, Effect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { WeatherService } from '../../core/service/weather.service';
import { IAppState } from '../app.state';
import { IWeatherHttp } from '../../models/IWeatherHttp';
import { EWeatherActions, GetWeather, GetWeatherError, GetWeatherSuccess } from './weather.actions';
import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Injectable()
export class WeatherEffects {

    @Effect()
    protected getWeather$ = this.actions$.pipe(
        ofType<GetWeather>(EWeatherActions.GetWeather),
        map(res => res),
        switchMap((payload) => {
            return this.weatherService.getWeather().pipe(
                map((res) => {
                    return new GetWeatherSuccess(res);
                },
                    (error) => new GetWeatherError(error))
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
