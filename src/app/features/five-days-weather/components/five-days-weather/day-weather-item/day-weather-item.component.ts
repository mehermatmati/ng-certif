import { Weather } from './../../../../../shared/models/weather.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-weather-item',
  templateUrl: './day-weather-item.component.html',
  styleUrls: ['./day-weather-item.component.css']
})
export class DayWeatherItemComponent implements OnInit {

  @Input()
  public weather : Weather;
  constructor() { }

  ngOnInit(): void {
  }

}
