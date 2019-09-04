import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../redux/app.state';
import { selectSpinnerList } from '../../redux/spinner-reducer/spinner.selector';
import { select } from '@ngrx/store';
import { GetStatus } from '../../redux/spinner-reducer/spinner.actions';
import { GetWeather } from '../../redux/weather-reducer/weather.actions';
import { selectWeatherList } from '../../redux/weather-reducer/weather.selector';
import { GetDailyWeather } from '../../redux/daily-weather-reducer/daily-weather.actions';
import { selectDailyWeatherList } from '../../redux/daily-weather-reducer/daily-weather.selector';
import { IWeatherParams } from '../../models/IWeatherParams';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public showSpinner = false;
  public weatherData;
  public dailyWeatherData;

  constructor(private store: Store<IAppState>) { }

  // It get the params and launch the call in effects
  getData(event) {
    const data: IWeatherParams = {
      q: event,
      cnt: environment.options.cnt,
      units: environment.options.units,
      APPID: environment.apiKey
    };
    this.store.dispatch(new GetWeather(data));
    this.store.dispatch(new GetDailyWeather(data));
    this.store.dispatch(new GetStatus({ status: false }));
  }

  ngOnInit() {
    // Get the spinner status
    this.store.pipe(select(selectSpinnerList)).subscribe((state) => {
      this.showSpinner = state.status;
    });
    // Get the weather header data, weatherData will be the input data of the header component
    this.store.pipe(select(selectWeatherList)).subscribe((state) => {
      if (state.base) {
        this.weatherData = state;
      }
    });
    // Get the daily weather data, dailyWeatherData will be the input data of the daily component
    this.store.pipe(select(selectDailyWeatherList)).subscribe((state) => {
      this.dailyWeatherData = state.list;
    });
  }

}
