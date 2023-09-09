import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  myWeather: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  pressure: number = 0;
  humidity: number = 0;
  summary: string = '';
  iconURL: string = '';
  cityName: string = 'Colombo';
  previousCityName: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather(this.cityName);
  }
  onSubmit() {
    this.previousCityName = this.cityName;
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  private getWeather(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        this.feelsLikeTemp = this.myWeather.main.feels_like;
        this.pressure = this.myWeather.main.pressure;
        this.humidity = this.myWeather.main.humidity;
        this.summary = this.myWeather.weather[0].main;

        this.iconURL =
          'https://openweathermap.org/img/wn/' +
          this.myWeather.weather[0].icon +
          '@2x.png';
      },
      error: (error) => console.log(error.message),
      complete: () => console.log('API call completed'),
    });
  }
}

// var fruits = [
//   {name: "apple", color: "red"},
//   {name: "banana", color: "yellow"},
//   {name: "orange", color: "orange"}
// ];
// Each element of the array is an object with two properties: name and color. You can access the properties using the dot notation, such as fruits[0].name or fruits[2].color.
