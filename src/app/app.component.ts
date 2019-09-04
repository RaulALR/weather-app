import { Component, OnInit } from '@angular/core';
import { Utils } from './shared/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  public iconsArray: Array<string> = ['moon-new', 'thermometer', 'weather-windy', '01d', '02d',
    '03d', '04d', '09d', '10d', '11d', '13d', '50d', '01n', '02n', '03n',
    '04n', '09n', '10n', '11n', '13n', '50n'];

  constructor(
    public utils: Utils
  ) {  }

  ngOnInit() {
    this.utils.getIcons(this.iconsArray);
  }
}
