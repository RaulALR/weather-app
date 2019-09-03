import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';
import { IWeatherHttp } from '../../models/IWeatherHttp';

const selectWeather = (state: IAppState) => state.weatherStore;
const selectDailyWeather = (state: IAppState) => state.weatherDailyStore;

export const selectWeatherList = createSelector(
    selectWeather,
    selectDailyWeather,
    (state: IWeatherHttp) => state
);
