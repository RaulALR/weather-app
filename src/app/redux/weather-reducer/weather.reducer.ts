import { initialWeatherState } from './weather.state';
import { WeatherActions, EWeatherActions } from './weather.actions';
import { IWeatherHttp } from '../../models/IWeatherHttp';

export const weatherReducers = (state = initialWeatherState, action: WeatherActions) => {
    switch (action.type) {
        case EWeatherActions.GetWeatherSuccess: {
            return {
                ...state,
                coord: action.payload.coord,
                weather: action.payload.weather,
                base: action.payload.base,
                main: action.payload.main,
                visibility: action.payload.visibility,
                wind: action.payload.wind,
                clouds: action.payload.clouds,
                dt: action.payload.dt,
                sys: action.payload.sys,
                timezone: action.payload.timezone,
                id: action.payload.id,
                name: action.payload.name,
                cod: action.payload.cod
            };
        }
        case EWeatherActions.GetWeatherError: {
            return {
                ...state,
                error: action.payload.error,
                status: action.payload.status
            };
        }
        default:
            return state;
    }
};
