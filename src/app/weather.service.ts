import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeather(cityName: string) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        cityName +
        '&appid=7765bc0b0fdcad6bcc3cdcea27f89058&units=metric'
    );
  }
}
