import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveDaysWeatherListComponent } from './five-days-weather-list.component';

describe('FiveDaysWeatherListComponent', () => {
  let component: FiveDaysWeatherListComponent;
  let fixture: ComponentFixture<FiveDaysWeatherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveDaysWeatherListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveDaysWeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
