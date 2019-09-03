
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatProgressSpinnerModule, MatCardModule, MatIconModule, MatListModule } from '@angular/material';
import { SpinnerComponent } from '../../core/components/spinner/spinner.component';
import { WeatherService } from '../../core/service/weather.service';
import { HeaderComponent } from '../../core/components/header/header.component';
import { Utils } from '../../shared/utils';

@NgModule({
    declarations: [
        HomeComponent,
        SpinnerComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HomeRoutingModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule,
        MatListModule
    ],
    providers: [
        Utils
    ],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
