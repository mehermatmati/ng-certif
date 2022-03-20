import { SharedModule } from './../../shared/shared.module';
import { FiveDaysWeatherRoutes } from './five-days-weather.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveDaysWeatherComponent } from './components/five-days-weather/five-days-weather.component';
import { DayWeatherItemComponent } from './components/five-days-weather/day-weather-item/day-weather-item.component';



@NgModule({
  declarations: [
    FiveDaysWeatherComponent,
    DayWeatherItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FiveDaysWeatherRoutes),
    SharedModule
  ]
})
export class FiveDaysWeatherModule { }
