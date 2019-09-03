import { IWeatherHttp } from '../../models/IWeatherHttp';
import { EDailyWeatherActions, DailyWeatherActions } from './daily-weather.actions';
import { initialDailyWeatherState } from './daily-weather.state';

export const dailyWeatherReducers = (state = initialDailyWeatherState, action: DailyWeatherActions) => {
    switch (action.type) {
        case EDailyWeatherActions.GetDailyWeatherSuccess: {
            return {
                ...state,
                cod: action.payload.cod,
                message: action.payload.message,
                cnt: action.payload.cnt,
                list: action.payload.list,
                city: action.payload.city
            };
        }
        case EDailyWeatherActions.GetDailyWeatherError: {
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
