import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_URL_BASE = 'http://localhost:3000/temperature';
  httpHeader = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http : HttpClient) { }


  get_current_weather_from_server() : Observable<any>{
    return this.http.get(this.API_URL_BASE);
  }


}
