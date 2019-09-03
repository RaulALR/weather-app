import { Action } from '@ngrx/store';
import { IWeatherHttp } from '../../models/IWeatherHttp';
import { IWeatherError } from '../../models/IWeatherError';

export enum EWeatherActions {
    GetWeather = '[Weather] Get Weather',
    GetWeatherSuccess = '[Weather] Get Weather Success',
    GetWeatherError = '[Weather] Get Weather Error',
}

export class GetWeather implements Action {
    public readonly type = EWeatherActions.GetWeather;
}

export class GetWeatherSuccess implements Action {
    public readonly type = EWeatherActions.GetWeatherSuccess;
    constructor(public payload: IWeatherHttp) { }
}

export class GetWeatherError implements Action {
    public readonly type = EWeatherActions.GetWeatherError;
    constructor(public payload: IWeatherError) { }
}


export type WeatherActions = GetWeather | GetWeatherSuccess | GetWeatherError;
