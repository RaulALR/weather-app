import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class Utils {

    constructor(
        private domSanitizer: DomSanitizer,
        private matIconRegistry: MatIconRegistry
    ) { }

    public getIcons(iconsArray: Array<string>) {
        iconsArray.forEach((item) => {
            const name = item.split('.');
            this.matIconRegistry.addSvgIcon(
                name[0],
                this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${item}`)
            );
        });
    }
}
