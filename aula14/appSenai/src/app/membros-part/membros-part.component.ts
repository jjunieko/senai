import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DeputadosComponent } from '../deputados/deputados.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-membros-part',
  templateUrl: './membros-part.component.html',
  styleUrls: ['./membros-part.component.css']
})
export class MembrosPartComponent implements OnInit {

  membros = [];
  deputados= [];
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
 

  constructor(public apiService: ApiService, 
    public route: ActivatedRoute,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    const idPartido = this.route.snapshot.paramMap.get('id');
    this.apiService.getMembros(idPartido).subscribe((res) => {
      this.membros = res.dados;
      console.log(this.membros);
    });

}
  openModalDeputado(idDeputado) {
      const dialog = this.dialog.open(DeputadosComponent,{
      data: {
          id: idDeputado
        }
    });
}
}
    

  
