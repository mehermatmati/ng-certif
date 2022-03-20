import { FiveDaysWeatherModule } from './five-days-weather/five-days-weather.module';
import { FiveDaysWeatherComponent } from './five-days-weather/components/five-days-weather/five-days-weather.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayWeatherModule } from './today-weather/today-weather.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
  ]
})
export class FeaturesModule { }
