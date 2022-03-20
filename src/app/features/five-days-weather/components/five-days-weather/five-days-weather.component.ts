import { Weather } from './../../../../shared/models/weather.model';
import { WeatherService } from './../../../../shared/services/weather.service';
import { Subscription, zip } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-five-days-weather',
  templateUrl: './five-days-weather.component.html',
  styleUrls: ['./five-days-weather.component.css']
})
export class FiveDaysWeatherComponent implements OnInit ,OnDestroy {
  public zipCode : string;
  public weathers : Weather[] = [];

  private sub$ : Subscription;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService, private router : Router) { }

  ngOnInit(): void {
    this.zipCode = this.route.snapshot.paramMap.get('zipCode');
    this.sub$ = this.weatherService.getForecastWeather(this.zipCode).subscribe(data => this.weathers = data);
  }

  onClickBack() {
    this.router.navigate([''])
  }

  ngOnDestroy(): void {
   this.sub$.unsubscribe();
  }

}
