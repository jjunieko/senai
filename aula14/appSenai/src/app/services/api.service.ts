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

 public getMembros(id) {
   var urlMembros = this.url + 'partidos/' + id + '/membros';
   return this.httpclient.get(urlMembros);
  //return this.httpclient.get(this.url + 'partidos/' + id + '/membros');
}

public getDeputado(id) {
  var urlDeputados = this.url  + 'deputados/' + id;
  return this.httpclient.get(urlDeputados);
}


}
