import { WeatherEnum } from './../../enums/weather.enum';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css']
})
export class WeatherIconComponent implements OnInit {

  @Input()
  public condition : String
  @Input()
  public isIcon : boolean;

  public weatherEnum = WeatherEnum;
  constructor() { }

  ngOnInit(): void {
  }

}
 