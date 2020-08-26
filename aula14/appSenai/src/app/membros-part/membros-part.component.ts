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

  displayedColumns: string[] = ['id','sigla', 'nome','email'];
  membros = [];
 

  constructor(public apiService: ApiService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    const idPartido = this.route.snapshot.paramMap.get('id');
   this.apiService.getMembros(idPartido).subscribe((res) => {
     console.log(this.membros);
    });


// teste para ver se aparece membros na pagina de membros 
   // this.apiService.getPartidos().subscribe((res) => {
    //  this.membros = res.dados;
    //  console.log(this.membros);
    //});
  }


  

}