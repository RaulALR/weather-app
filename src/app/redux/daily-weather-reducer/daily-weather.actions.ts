import { Action } from '@ngrx/store';
import { IWeatherError } from '../../models/IWeatherError';
import { IWeatherDailyHttp } from '../../models/IWeatherDailyHttp';
import { IWeatherParams } from '../../models/IWeatherParams';

export enum EDailyWeatherActions {
    GetDailyWeather = '[Weather] Get Daily Weather',
    GetDailyWeatherSuccess = '[Weather] Get Daily Weather Success',
    GetDailyWeatherError = '[Weather] Get Daily Weather Error',
}


export class GetDailyWeather implements Action {
    public readonly type = EDailyWeatherActions.GetDailyWeather;
    constructor(public payload: IWeatherParams) { }
}

export class GetDailyWeatherSuccess implements Action {
    public readonly type = EDailyWeatherActions.GetDailyWeatherSuccess;
    constructor(public payload: IWeatherDailyHttp) { }
}

export class GetDailyWeatherError implements Action {
    public readonly type = EDailyWeatherActions.GetDailyWeatherError;
    constructor(public payload: IWeatherError) { }
}
export type DailyWeatherActions = GetDailyWeather | GetDailyWeatherSuccess | GetDailyWeatherError;
