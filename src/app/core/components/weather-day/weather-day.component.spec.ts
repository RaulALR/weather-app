import { NO_ERRORS_SCHEMA } from "@angular/core";
import { WeatherDayComponent } from "./weather-day.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("WeatherDayComponent", () => {

  let fixture: ComponentFixture<WeatherDayComponent>;
  let component: WeatherDayComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [WeatherDayComponent]
    });

    fixture = TestBed.createComponent(WeatherDayComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
