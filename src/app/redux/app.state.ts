import { initialSpinnerState } from './spinner-reducer/spinner.state';
import { ISpinnerState } from '../models/ISpinnerState';
import { IWeatherHttp } from '../models/IWeatherHttp';
import { initialWeatherState } from './weather-reducer/weather.state';

export interface IAppState {
    spinnerStatus: ISpinnerState;
    weatherStore: IWeatherHttp;

}

export const intialAppSate: IAppState = {
    spinnerStatus: initialSpinnerState,
    weatherStore: initialWeatherState
};
