import { WeatherEnum } from './../../../../../shared/enums/weather.enum';
import { Weather } from './../../../../../shared/models/weather.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input()
  public weather : Weather;
  @Input()
  public index: number;  
  @Output()
  public deleteEmitter : EventEmitter<number> = new EventEmitter();

  public enumWeather = WeatherEnum;

  constructor() { }

  ngOnInit(): void {
  }

  public delete(){
    this.deleteEmitter.emit(this.index);
  }


}
