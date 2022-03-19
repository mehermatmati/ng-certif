import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayWeatherModule } from './today-weather/today-weather.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TodayWeatherModule
  ]
})
export class FeaturesModule { }
