import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WeatherIconComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [ReactiveFormsModule,WeatherIconComponent]
})
export class SharedModule { }
