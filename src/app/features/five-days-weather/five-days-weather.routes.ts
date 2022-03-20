import { FiveDaysWeatherComponent } from './components/five-days-weather/five-days-weather.component';
import { Routes } from '@angular/router';

export const FiveDaysWeatherRoutes: Routes = [
  {
    path: ':zipCode',
    component: FiveDaysWeatherComponent,
  },
  {
    path: '**',
    redirectTo: ''
  } 
]; 