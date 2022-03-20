import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'today',
    pathMatch: 'full'
  },
  {
    path: 'today',
    loadChildren: () => import('./features/today-weather/today-weather.module').then(x => x.TodayWeatherModule)
  },
  {
    path: 'future',
    loadChildren: () => import('./features/five-days-weather/five-days-weather.module').then(x => x.FiveDaysWeatherModule)
  },
  {
    path: '**',
    redirectTo: 'today',
  } 
 
  
];

