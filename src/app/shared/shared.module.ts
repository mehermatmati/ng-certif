import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WeatherIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ReactiveFormsModule]
})
export class SharedModule { }
