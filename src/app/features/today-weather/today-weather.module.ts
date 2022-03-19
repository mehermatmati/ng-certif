import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayWeatherComponent } from './components/today-weather/today-weather.component';
import { LocationComponent } from './components/today-weather/location/location.component';
import { WeatherComponent } from './components/today-weather/weather/weather.component';
import { SharedModule } from '../../shared/shared.module';
  
@NgModule({
  declarations: [
    TodayWeatherComponent,
    LocationComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TodayWeatherComponent,
    LocationComponent,
    WeatherComponent]
})
export class TodayWeatherModule { }
