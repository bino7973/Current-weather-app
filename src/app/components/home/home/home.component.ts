import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../../services/weather.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherListe : any;
  todayMonth  = Date.now();
  todayDay  = Date.now();

  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {
    this.get_weather();
    //console.log(this.weatherListe)
  }

  get_weather(){
    console.log("Debut")
    this.weatherService.get_current_weather_from_server().subscribe((resultat)=>{
      this.weatherListe = resultat
        console.log(resultat.resultat.name)
    }, (erreur)=>{
        console.log(erreur);
    });
  }

  convert_temperature_kelvin_degree(valeur : number) : number{
    return valeur - 273.15;
  }

}
