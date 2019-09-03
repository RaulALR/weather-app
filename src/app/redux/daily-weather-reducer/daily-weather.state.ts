import { IWeatherHttp } from '../../models/IWeatherHttp';
import { IWeatherDailyHttp } from '../../models/IWeatherDailyHttp';

export const initialDailyWeatherState: IWeatherDailyHttp = {
    cod: null,
    message: 0,
    cnt: 0,
    list: [],
    city: null
};
