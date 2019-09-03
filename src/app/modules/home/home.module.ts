
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatProgressSpinnerModule, MatCardModule, MatIconModule, MatListModule, MatInputModule, MatButtonModule } from '@angular/material';
import { SpinnerComponent } from '../../core/components/spinner/spinner.component';
import { WeatherService } from '../../core/service/weather.service';
import { HeaderComponent } from '../../core/components/header/header.component';
import { Utils } from '../../shared/utils';
import { WeatherDayComponent } from '../../core/components/weather-day/weather-day.component';
import { BrowserComponent } from '../../core/components/browser/browser.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomeComponent,
        SpinnerComponent,
        HeaderComponent,
        WeatherDayComponent,
        BrowserComponent
    ],
    imports: [
        BrowserModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [
        Utils
    ],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
