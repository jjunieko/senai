import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { Deputado } from '../models/DeputadoModal';


@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.css']
})
export class DeputadosComponent implements OnInit {

  id = null;
  deputado: any = Deputado;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {

    const { id } = this.data;
    //console.log(this.data);
    this.apiService.getDeputadoById(id).subscribe((res) => {
      //console.log(res);
      this.deputado = res.dados;
    });
  }

}

