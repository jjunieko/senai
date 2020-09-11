import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { ActivatedRoute } from "@angular/router";
import { DeputadosComponent } from "../deputados/deputados.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-membros-part",
  templateUrl: "./membros-part.component.html",
  styleUrls: ["./membros-part.component.css"],
})
export class MembrosPartComponent implements OnInit {
  membros: any = [];
  deputados: any = [];
  //aulas add membros aos partidos

  displayedColumns: string[] = [
    "id",
    "siglaUf",
    "nome",
    "email",
    "idLegislatura",
    "siglaPartido",
    "urlFoto",
  ];

  constructor(
    public apiService: ApiService,
    public route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const idPartido = this.route.snapshot.paramMap.get("id");
    this.apiService.getMembrosDoPartido(idPartido).subscribe((res) => {
      this.membros = res.dados;
      //console.log(this.membros);
    });
  }
  openModalDeputado(id: number) {
    const dialogRef = this.dialog.open(DeputadosComponent, {
      data: {
        id: id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });

    //const dialogRef = this.dialog.open(DeputadosComponent,{
    // data: {
    //    id
    //   }
    //});
  }
}
