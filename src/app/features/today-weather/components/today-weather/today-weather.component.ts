import { WeatherEnum } from './../../../../shared/enums/weather.enum';
import { concatMap, map } from 'rxjs';
import { WeatherService } from './../../../../shared/services/weather.service';
import { Weather } from './../../../../shared/models/weather.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayWeatherComponent implements OnInit {

  public zipCodes : String[] = [];
  public weathers : Weather[] = [];
  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {
   this.initStoredZipCode();
  }

  public receiveLocation($event : String) {
    this.addWeather($event.toString());
  }

  public receiveDelete($event : number){
    console.log($event);
    this.weathers.splice($event,1);
    this.StoreZipCodes();
  }

  private addWeather(zipCode : String) : void {
    let weather : Weather = new Weather();
    this.weatherService.getCurrentWeather(zipCode).subscribe(res => {
      weather = res;
      this.weathers.push(weather);
      this.StoreZipCodes();
    });
  }

  private initStoredZipCode() {
    this.zipCodes =JSON.parse(localStorage.getItem('locations'));
    if(this.zipCodes && this.zipCodes.length>0) {
      for(let zipCode of this.zipCodes) {
        this.addWeather(zipCode);
      }
    }
  }

  private StoreZipCodes() {
    this.zipCodes = this.weathers.map(weather => weather.zipCode);
    localStorage.setItem('locations', JSON.stringify(this.zipCodes));
  }
}
