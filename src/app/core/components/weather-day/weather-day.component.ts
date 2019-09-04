import { Component, OnInit, Input } from '@angular/core';
import { Utils } from '../../../shared/utils';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-weather-day',
  templateUrl: './weather-day.component.html',
  styleUrls: ['./weather-day.component.scss'],
  animations: [
    trigger(
      'startAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('1500ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ])
      ]
    )
  ]
})

export class WeatherDayComponent implements OnInit {
  @Input()
  public weatherData;

  constructor(public utils: Utils) {

  }

  ngOnInit() {

  }
}
