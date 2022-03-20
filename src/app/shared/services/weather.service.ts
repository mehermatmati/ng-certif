import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, Observable, zip, map } from 'rxjs';
import { Weather } from '../models/weather.model';
import { Const } from '../utils/const';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getCurrentWeather(zipCode : String) : Observable<Weather> {
    // Setup log namespace query parameter
    let params = new HttpParams()
                                .set('zip', zipCode.toString())
                                .set('appid', Const.APP_ID);

    return this.http.get<any>(Const.URL_TODAY_WEATBER, {params : params}).pipe(map(res => {
      let weather : Weather = new Weather
      weather.date  = new Date(res['dt']*1000);
      weather.maxTemp = res['main']['temp_max'];
      weather.minTemp = res['main']['temp_min'];
      weather.temp =  res['main']['temp'];
      weather.weatherCondition = res['weather'][0]['main'];
      weather.city = res['name'];
      weather.zipCode = zipCode;
      return weather;
    }));
  }

}
