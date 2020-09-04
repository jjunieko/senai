import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HeroisService } from "../services/herois.service";

@Component({
  selector: "app-herois",
  templateUrl: "./herois.component.html",
  styleUrls: ["./herois.component.css"],
})
export class HeroisComponent implements OnInit {
  displayedColumns: string[] = ["id", "nome"];
  public form: FormGroup;
  herois = [];

  constructor(
    public formBuilder: FormBuilder,
    private HeroisService: HeroisService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [""],
    });

    this.buscarHerois();
    console.log(this.herois);
  }
  salvarHeroi() {
    //value serve para pegar um valor de um objeto
    //console.log(this.form.value);
    this.HeroisService.setHeroi(this.form.value);
    this.buscarHerois();
  }

  buscarHerois() {
    this.herois = this.HeroisService.getHerois();
  }
}
