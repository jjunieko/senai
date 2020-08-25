import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url= environment.urlApiCameraDeputados;

  constructor(public httpclient: HttpClient) { }

  public getPartidos() {
    return this.httpclient.get(this.url + 'partidos');
  }

}
