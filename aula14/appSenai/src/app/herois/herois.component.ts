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
  public isEdit: boolean = false;
  herois = [];

  constructor(
    public formBuilder: FormBuilder,
    private heroisService: HeroisService
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
      id: [""],
      nome: ["", [Validators.required]],
      sexo: ["", [Validators.required]],
      franquia: ["", [Validators.required]],
      poder: ["", [Validators.required, Validators.minLength(10)]],
    });

    this.buscarHerois();
    console.log(this.herois);
  }

  resetarForm() {
    this.isEdit = false;
    this.form.reset();
  }

  salvarHeroi() {
    if (this.form.valid) {
      //return;
      //}
      //value serve para pegar um valor de um objeto
      //console.log(this.form.value);
      this.heroisService.setHeroi(this.form.value);
      this.buscarHerois();
      this.resetarForm();
    }
  }

  buscarHerois() {
    this.herois = this.heroisService.getHerois();
  }

  removerHeroi(index) {
    //console.log(index);
    this.heroisService.remover(index);
    this.buscarHerois();
  }

  removerTodos() {
    this.heroisService.removeAll();
    this.buscarHerois();
  }

  editarHeroi(index) {
    let heroi = this.heroisService.findHeroi(index);
    heroi.id = index;
    this.form.patchValue(heroi);
    this.isEdit = true;
    console.log(heroi);
  }
}
