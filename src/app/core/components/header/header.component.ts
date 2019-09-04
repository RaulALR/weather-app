import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { IWeatherHttp } from '../../../models/IWeatherHttp';
import { Utils } from '../../../shared/utils';
import { trigger, transition, style, animate } from '@angular/animations';
// background: 'linear-gradient(to right, #2c2d34, #242424)'
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        trigger(
            'startAnimation', [
                transition(':enter', [
                    style({ transform: 'translateY(100%)', opacity: 0 }),
                    animate('1500ms', style({ transform: 'translateY(0)', opacity: 1 }))
                ])
            ]
        )
    ]
})

export class HeaderComponent implements OnInit {
    @Input()
    public weatherData: IWeatherHttp;

    constructor(
        public utils: Utils) { }


    public getDate() {
        return new Date();
    }

    ngOnInit() {
    }
}
