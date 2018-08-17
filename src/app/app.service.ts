import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'https://restcountries.eu/rest/v2';

  regionAfrica: any;
  regionAmericas: any;
  regionAsia: any;
  regionEurope: any;
  regionOceania: any;

  constructor(private http: HttpClient) { }

  getRegionAfrica() {
    return this.http.get(`${this.url}/region/africa`);
  }

  getRegionAmericas() {
    return this.http.get(`${this.url}/region/americas`);
  }

  getRegionAsia() {
    return this.http.get(`${this.url}/region/asia`);
  }

  getRegionEurope() {
    return this.http.get(`${this.url}/region/europe`);
  }

  getRegionOceania() {
    return this.http.get(`${this.url}/region/oceania`);
  }

  getSingleContry(name) {
    return this.http.get(`${this.url}/name/${name}`);
  }

  getContriesByCurrency(curr) {
    return this.http.get(`${this.url}/currency/${curr}`);
  }

  getContriesByLanguage(lang) {
    return this.http.get(`${this.url}/lang/${lang}`);
  }

}
