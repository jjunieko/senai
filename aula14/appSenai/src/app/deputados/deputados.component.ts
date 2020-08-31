import { Component, OnInit,  Inject } from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.css']
})
export class DeputadosComponent implements OnInit {
currentData: any;
deputado = {} ;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  public apiService: ApiService
  ) { }

  ngOnInit(): void {
  

    const { id } = this.data;
    //console.log(this.data);
    this.apiService.getDeputado( id ).subscribe((res)=>{
     //console.log(res);
      this.deputado = res.dados;
    });
  }
  
}

