import { initialSpinnerState } from './spinner-reducer/spinner.state';
import { ISpinnerState } from '../models/ISpinnerState';
import { IWeatherHttp } from '../models/IWeatherHttp';
import { IWeatherDailyHttp } from '../models/IWeatherDailyHttp';
import { initialWeatherState } from './weather-reducer/weather.state';
import { initialDailyWeatherState } from './daily-weather-reducer/daily-weather.state';

export interface IAppState {
    spinnerStatus: ISpinnerState;
    weatherStore: IWeatherHttp;
    weatherDailyStore: IWeatherDailyHttp;

}

export const intialAppSate: IAppState = {
    spinnerStatus: initialSpinnerState,
    weatherStore: initialWeatherState,
    weatherDailyStore: initialDailyWeatherState,
};
