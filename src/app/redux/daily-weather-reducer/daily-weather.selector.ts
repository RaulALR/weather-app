import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';
import { IWeatherDailyHttp } from '../../models/IWeatherDailyHttp';

const selectDailyWeather = (state: IAppState) => state.weatherDailyStore;

export const selectDailyWeatherList = createSelector(
    selectDailyWeather,
    (state: IWeatherDailyHttp) => state
);
