import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../redux/app.state';
import { selectSpinnerList } from '../../redux/spinner-reducer/spinner.selector';
import { select } from '@ngrx/store';
import { GetStatus } from '../../redux/spinner-reducer/spinner.actions';
import { GetWeather } from '../../redux/weather-reducer/weather.actions';
import { selectWeatherList } from '../../redux/weather-reducer/weather.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // private spinnerStatus$ = this.store.pipe(select(selectSpinnerList));
  public showSpinner = false;
  public weatherData;
  constructor(private store: Store<IAppState>) {

  }

  ngOnInit() {
    this.store.pipe(select(selectSpinnerList)).subscribe((state) => {
      this.showSpinner = state.status;
    });
    this.store.pipe(select(selectWeatherList)).subscribe((state) => {
      this.weatherData = state;
    });
    this.store.dispatch(new GetWeather());
  }

}
