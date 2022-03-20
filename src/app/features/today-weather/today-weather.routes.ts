import { TodayWeatherComponent } from './components/today-weather/today-weather.component';

   
import { Routes } from '@angular/router';

export const TodayWeatherRoutes: Routes = [
  {
    path: 'weather',
    component: TodayWeatherComponent,
  },
  {
    path: '**',
    redirectTo: 'weather'
  },

];