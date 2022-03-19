import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWeatherItemComponent } from './day-weather-item.component';

describe('DayWeatherItemComponent', () => {
  let component: DayWeatherItemComponent;
  let fixture: ComponentFixture<DayWeatherItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayWeatherItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayWeatherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
