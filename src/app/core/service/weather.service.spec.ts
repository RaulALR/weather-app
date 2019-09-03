import { WeatherService } from './weather.service';
import { TestBed } from '@angular/core/testing';

describe('WeatherService', () => {

  let service: WeatherService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherService
      ]
    });
    service = TestBed.get(WeatherService);

  });

  it('should be able to create service instance', () => {
    expect(service).toBeDefined();
  });

});
