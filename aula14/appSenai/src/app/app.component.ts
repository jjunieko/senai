import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Joao junior';
  idade = 29;
  sorvete = ['morango', 'chocolate', 'casquinha']

  funcaoDeClique(){
    window.alert('clicou');
  }
  mostrarMeuNome() {
    alert(this.nome);
  }


}
