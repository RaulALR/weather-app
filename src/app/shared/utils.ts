import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class Utils {
    public days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    constructor(
        private domSanitizer: DomSanitizer,
        private matIconRegistry: MatIconRegistry
    ) { }

    // Register external icons into app
    public getIcons(iconsArray: Array<string>) {
        iconsArray.forEach((item) => {
            const name = item.split('.');
            this.matIconRegistry.addSvgIcon(
                name[0],
                this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${item}.svg`)
            );
        });
    }

    // Get day of the param
    public getDateDay(dataTxt: string) {
        const date = new Date(dataTxt);
        return this.days[date.getDay()];
    }

    // Get hour of the param
    public getDateHour(dataTxt: string) {
        const date = new Date(dataTxt);
        return date.getHours();
    }

    // Get positive or negative symbol
    public getTempSymbol(num) {
        switch (Math.sign(num)) {
            case 1:
                return '+';
            case -1:
                return '-';
                break;
            default:
                return '';
        }
    }

    // Get actual date
    public getDate() {
        return new Date();
    }
}
