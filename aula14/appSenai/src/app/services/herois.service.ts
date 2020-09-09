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

  public setHeroi(heroi: object) {
    //const herois = JSON.parse(localStorage.getItem("herois")) || [];
    const herois = this.getHerois();
    herois.push(heroi);
    localStorage.setItem("herois", JSON.stringify("herois"));
    // localStorage.setItem("herois", JSON.stringify(heroi));
    //console.log(heroi);
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
}
