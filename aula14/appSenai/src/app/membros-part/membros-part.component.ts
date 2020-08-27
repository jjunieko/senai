import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membros-part',
  templateUrl: './membros-part.component.html',
  styleUrls: ['./membros-part.component.css']
})
export class MembrosPartComponent implements OnInit {


  //aulas add membros aos partidos

  displayedColumns: string[] = [
  'id', 
  'siglaUf',
  'nome',
  'email',
  'idLegislatura',
  'siglaPartido',
  'urlFoto'
];
  membros = [];
 
id: string;

  constructor(public apiService: ApiService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    //const idPartido = this.route.snapshot.paramMap.get('id');

    //this.id= this.route.snapshot.paramMap.get('id');
    //this.apiService.getMembros(this.id).subscribe((res) =>{
    //  this.membros = res.dados;
    //  console.log(this.membros);
  //});
    this.apiService
    .getMembros(this.route.snapshot.paramMap.get('id')).subscribe((res) => {
    this.membros = res.dados;
    console.log(this.membros);
    });
  }
  }

// teste para ver se aparece membros na pagina de membros 
   // this.apiService.getPartidos().subscribe((res) => {
    //  this.membros = res.dados;
    //  console.log(this.membros);
    //});


  
