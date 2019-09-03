import { ActionReducerMap } from '@ngrx/store';
import { spinnerReducers } from './spinner-reducer/spinner.reducer';
import { weatherReducers } from './weather-reducer/weather.reducer';
import { IAppState } from './app.state';
import { dailyWeatherReducers } from './daily-weather-reducer/daily-weather.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    spinnerStatus: spinnerReducers,
    weatherStore: weatherReducers,
    weatherDailyStore: dailyWeatherReducers
};
