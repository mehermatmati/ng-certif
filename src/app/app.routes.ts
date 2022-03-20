import { Routes } from '@angular/router';

export const AppRoutes: Routes = [

  {
    path: 'today',
    loadChildren: () => import('./features/today-weather/today-weather.module').then(x => x.TodayWeatherModule)
  },
  {
    path: 'forecast',
    loadChildren: () => import('./features/five-days-weather/five-days-weather.module').then(x => x.FiveDaysWeatherModule)
  },
  {
    path: '**',
    redirectTo: 'today',
  } 
 
  
];

