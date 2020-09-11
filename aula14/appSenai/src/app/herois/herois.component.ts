import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HeroisService } from "../services/herois.service";
import { Heroi } from "../models/heroi.model";

@Component({
  selector: "app-herois",
  templateUrl: "./herois.component.html",
  styleUrls: ["./herois.component.css"],
})
export class HeroisComponent implements OnInit {
  displayedColumns: Array<string> = [
    "id",
    "nome",
    "sexo",
    "franquia",
    "poder",
    "acoes",
  ];
  public form: FormGroup;
  public isEdit: boolean = false;
  public herois: Array<Heroi> = [];

  constructor(
    public formBuilder: FormBuilder,
    private heroisService: HeroisService
  ) {}

  getErrorMessage(field: string): string {
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

  resetarForm(): void {
    this.isEdit = false;
    this.form.reset();
  }

  salvarHeroi(): void {
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

  buscarHerois(): void {
    this.herois = this.heroisService.getHerois();
  }

  removerHeroi(index): void {
    //console.log(index);
    this.heroisService.remover(index);
    this.buscarHerois();
  }

  removerTodos(): void {
    this.heroisService.removeAll();
    this.buscarHerois();
  }

  editarHeroi(index): void {
    let heroi = this.heroisService.findHeroi(index);
    heroi.id = index;
    this.form.patchValue(heroi);
    this.isEdit = true;
    console.log(heroi);
  }
}
