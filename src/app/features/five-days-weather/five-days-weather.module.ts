import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveDaysWeatherComponent } from './components/five-days-weather/five-days-weather.component';
import { DayWeatherItemComponent } from './components/five-days-weather/day-weather-item/day-weather-item.component';
import { FiveDaysTableComponent } from './components/five-days-weather/five-days-table/five-days-table.component';
import { FiveDaysWeatherListComponent } from './components/five-days-weather/five-days-weather-list/five-days-weather-list.component';



@NgModule({
  declarations: [
    FiveDaysWeatherComponent,
    DayWeatherItemComponent,
    FiveDaysTableComponent,
    FiveDaysWeatherListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FiveDaysWeatherModule { }
