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
  page = 1;
  links = [];


  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.getPartidos(this.page);
  }

  getPartidos(page = 1) {
    this.apiService.getPartidos(page).subscribe((response) => {
      this.partidos = response.dados;
      this.links = response.links;
      //console.log(this.partidos);
    });
  }

  anteriorPagina() {
    if (this.page === 1) {
      return;
    }
    this.getPartidos(--this.page);
  }
  proximaPagina() {
    this.getPartidos(++this.page);
  }
  temProximaPg() {
    const verificacao = this.links.filter((link) => {
      return link.rel === 'next';

    });
    return verificacao.length > 0;
  }

}
