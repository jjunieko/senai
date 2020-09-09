import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HeroisService } from "../services/herois.service";

@Component({
  selector: "app-herois",
  templateUrl: "./herois.component.html",
  styleUrls: ["./herois.component.css"],
})
export class HeroisComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "nome",
    "sexo",
    "franquia",
    "poder",
    "acoes",
  ];
  public form: FormGroup;
  herois = [];

  constructor(
    public formBuilder: FormBuilder,
    private HeroisService: HeroisService
  ) {}

  getErrorMessage(field: string) {
    if (this.form.get(field).hasError("required")) {
      return "O campo " + field + " é obrigatório!!!";
    }
    if (this.form.get(field).hasError("minlength")) {
      return "O campo " + field + " precisa de mais caracter!!!";
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ["", [Validators.required]],
      sexo: ["", [Validators.required]],
      franquia: ["", [Validators.required]],
      poder: ["", [Validators.required, Validators.minLength(10)]],
    });

    this.buscarHerois();
    console.log(this.herois);
  }

  resetarForm() {
    this.form.reset();
  }

  salvarHeroi() {
    if (!this.form.valid) {
      //return;
      //}
      //value serve para pegar um valor de um objeto
      //console.log(this.form.value);
      this.HeroisService.setHeroi(this.form.value);
      this.buscarHerois();
      this.resetarForm();
    } else {
      alert("vazio");
    }
  }

  buscarHerois() {
    this.herois = this.HeroisService.getHerois();
  }

  //resetHeroi() {
  // this.HeroisService.resetar();
  // this.buscarHerois();
  //}

  removerHeroi(index) {
    //console.log(index);
    this.HeroisService.remover(index);
    this.buscarHerois();
  }

  removerTodos() {
    this.HeroisService.removeAll();
    this.buscarHerois();
  }
}
