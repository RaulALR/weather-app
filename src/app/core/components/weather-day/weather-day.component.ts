import { Component, OnInit, Input } from '@angular/core';
import { Utils } from '../../../shared/utils';

@Component({
  selector: 'app-weather-day',
  templateUrl: './weather-day.component.html',
  styleUrls: ['./weather-day.component.scss']
})

export class WeatherDayComponent implements OnInit {
  @Input()
  public weatherData;

  constructor(public utils: Utils) {

  }

  ngOnInit() {

  }
}
