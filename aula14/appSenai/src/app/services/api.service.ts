import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseApi } from '../models/ResponseApi.model';
import { ResponseApiDeputado } from '../models/ResponseApiDeputado';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.urlApiCameraDeputados;

  constructor(public httpclient: HttpClient) { }

  public getPartidos(page): Observable<ResponseApi> {
    return this.httpclient.get<ResponseApi>(this.url + 'partidos?pagina=' + page);
  }

  public getMembrosDoPartido(id): Observable<ResponseApi> {
    var urlMembros = this.url + 'partidos/' + id + '/membros';
    return this.httpclient.get<ResponseApi>(urlMembros);
    //return this.httpclient.get(this.url + 'partidos/' + id + '/membros');
  }

  public getDeputadoById(id): Observable<ResponseApiDeputado> {
    var urlDeputados = this.url + 'deputados/' + id;
    return this.httpclient.get<ResponseApiDeputado>(urlDeputados);
  }


}
