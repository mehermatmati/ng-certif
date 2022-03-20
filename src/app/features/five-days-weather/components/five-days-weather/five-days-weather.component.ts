import { Weather } from './../../../../shared/models/weather.model';
import { WeatherService } from './../../../../shared/services/weather.service';
import { zip } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-five-days-weather',
  templateUrl: './five-days-weather.component.html',
  styleUrls: ['./five-days-weather.component.css']
})
export class FiveDaysWeatherComponent implements OnInit {
  public zipCode : string;
  public weathers : Weather[] = [];

  constructor(private route: ActivatedRoute, private weatherService: WeatherService, private router : Router) { }

  ngOnInit(): void {
    this.zipCode = this.route.snapshot.paramMap.get('zipCode');
    this.weatherService.getForecastWeather(this.zipCode).subscribe(data => this.weathers = data);
  }

  onClickBack() {
    this.router.navigate(['/today/weather'])
  }

}
