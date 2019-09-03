import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { IWeatherHttp } from '../../../models/IWeatherHttp';
import { Utils } from '../../../shared/utils';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    @Input()
    public weatherData: IWeatherHttp;

    public iconsArray: Array<string> = ['moon-new.svg', 'thermometer.svg', 'weather-windy.svg'];

    constructor(
        public utils: Utils) { }


    public getDate() {
        return new Date();
    }

    ngOnInit() {
        this.utils.getIcons(this.iconsArray);
    }
}
