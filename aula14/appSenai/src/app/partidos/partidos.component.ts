import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-partidos",
  templateUrl: "./partidos.component.html",
  styleUrls: ["./partidos.component.css"],
})
export class PartidosComponent implements OnInit {
  displayedColumns: Array<string> = ["id", "sigla", "nome", "membros"];
  partidos: any = [];
  page: number = 1;
  links: any = [];

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.getPartidos(this.page);
  }

  getPartidos(page: number = 1): void {
    this.apiService.getPartidos(page).subscribe((response) => {
      this.partidos = response.dados;
      this.links = response.links;
      //console.log(this.partidos);
    });
  }

  anteriorPagina(): void {
    if (this.page === 1) {
      return;
    }
    this.getPartidos(--this.page);
  }
  proximaPagina(): void {
    this.getPartidos(++this.page);
  }
  temProximaPg(): boolean {
    const verificacao = this.links.filter((link) => {
      return link.rel === "next";
    });
    return verificacao.length > 0;
  }
}
