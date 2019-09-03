import { Component, OnInit } from '@angular/core';
import { Utils } from './shared/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  public iconsArray: Array<string> = ['moon-new.svg', 'thermometer.svg', 'weather-windy.svg', '01d.png', '02d.png',
    '03d.png', '04d.png', '09d.png', '10d.png', '11d.png', '13d.png', '50d.png', '01n.png', '02n.png', '03n.png',
    '04n.png', '09n.png', '10n.png', '11n.png', '13n.png', '50n.png'];

  constructor(
    public utils: Utils
  ) {  }

  ngOnInit() {
    this.utils.getIcons(this.iconsArray);
  }
}
