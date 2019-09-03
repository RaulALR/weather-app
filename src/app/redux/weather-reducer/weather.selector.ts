import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';
import { IWeatherHttp } from '../../models/IWeatherHttp';

const selectWeather = (state: IAppState) => state.weatherStore;

export const selectWeatherList = createSelector(
    selectWeather,
    (state: IWeatherHttp) => state
);
