import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './redux/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './redux/weather-reducer/weather.effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WeatherInterceptor } from './core/interceptors/weather.interceptor';
import { WeatherService } from './core/service/weather.service';
import { DailyWeatherEffects } from './redux/daily-weather-reducer/daily-weather.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([WeatherEffects, DailyWeatherEffects]),
    StoreDevtoolsModule.instrument(),
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WeatherInterceptor, multi: true },
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
