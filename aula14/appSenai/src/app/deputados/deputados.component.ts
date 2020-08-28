import { Component, OnInit,  Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.css']
})
export class DeputadosComponent implements OnInit {


deputado = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data, public apiService: ApiService) { }

  ngOnInit(): void {
    const{ id }= this.data;
    console.log(id);
    this.apiService.getDeputados(id).subscribe((res)=>{
     this.deputado = res.dados;
    });
  }
}
