import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {


  //aulas 

  displayedColumns: string[] = ['id', 'sigla', 'nome', 'membros'];
  partidos = [];
 

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPartidos().subscribe((response) => {
      this.partidos = response.dados;
      console.log(this.partidos);
    });
  }

}
