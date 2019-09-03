import { IWeatherHttp } from '../../models/IWeatherHttp';
import { IWeatherDailyHttp } from '../../models/IWeatherDailyHttp';

export const initialWeatherState: IWeatherHttp = {
    coord: null,
    weather: null,
    base: null,
    main: null,
    visibility: 0,
    wind: null,
    clouds: null,
    dt: 0,
    sys: null,
    timezone: null,
    id: 0,
    name: null,
    cod: 0
};
