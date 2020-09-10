import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HeroisService {
  constructor() {}

  public getHerois() {
    const herois = JSON.parse(localStorage.getItem("herois")) || [];
    return herois;
  }

  public setHeroi(heroi: Object) {
    if (heroi.id || heroi.id == 0) {
      // atualizar heroi que já existe
      this.atualizarHeroi(heroi);
    } else {
      this.cadastrarHeroi(heroi);
    }
  }

  atualizarHeroi(heroi) {
    let herois = this.getHerois();
    herois = herois.map((data, index) => {
      if (heroi.id == index) {
        return heroi;
      } else {
        return data;
      }
    });
    localStorage.setItem("herois", JSON.stringify(herois));
  }

  cadastrarHeroi(heroi) {
    const herois = this.getHerois();
    herois.push(heroi);
    localStorage.setItem("herois", JSON.stringify(herois));
  }

  remover(index) {
    const herois = this.getHerois();
    herois.splice(index, 1);
    localStorage.setItem("herois", JSON.stringify(herois));
  }

  removeAll() {
    localStorage.setItem("herois", JSON.stringify([]));
    //localStorage.clear();
  }

  findHeroi(chaveUnica) {
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
