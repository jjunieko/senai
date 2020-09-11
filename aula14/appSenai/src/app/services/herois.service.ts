import { Injectable } from "@angular/core";
import { Heroi } from "../models/heroi.model";

@Injectable({
  providedIn: "root",
})
export class HeroisService {
  public getHerois(): Array<Heroi> {
    const herois = JSON.parse(localStorage.getItem("herois")) || [];
    return herois;
  }

  public setHeroi(heroi: Heroi): void {
    if (heroi.id || heroi.id == 0) {
      // atualizar heroi que já existe
      this.atualizarHeroi(heroi);
    } else {
      this.cadastrarHeroi(heroi);
    }
  }

  atualizarHeroi(heroi: Heroi): void {
    let herois = this.getHerois();
    herois = herois.map((data, index) => {
      if (heroi.id == index) {
        return heroi;
      } else {
        return data;
      }
    });
    //localStorage.setItem("herois", JSON.stringify(herois));
    this.armazenarHeroisLocalStorage(herois);
  }

  cadastrarHeroi(heroi: Heroi): void {
    const herois = this.getHerois();
    herois.push(heroi);
    //localStorage.setItem("herois", JSON.stringify(herois));
    this.armazenarHeroisLocalStorage(herois);
  }

  remover(index: number): void {
    const herois = this.getHerois();
    herois.splice(index, 1);
    //localStorage.setItem("herois", JSON.stringify(herois));
    this.armazenarHeroisLocalStorage(herois);
  }

  removeAll() {
    localStorage.setItem("herois", JSON.stringify([]));
    //localStorage.clear();
  }

  armazenarHeroisLocalStorage(herois: Array<Heroi>): void {
    localStorage.setItem("herois", JSON.stringify(herois));
  }

  findHeroi(chaveUnica: number): Heroi {
    const herois = this.getHerois();
    const heroi = herois.find((data, index) => {
      //console.log(data);
      if (chaveUnica === index) {
        //console.log(data);
        return data;
      }
    });
    return heroi;
  }
}
