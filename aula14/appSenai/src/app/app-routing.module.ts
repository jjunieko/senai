import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent} from './react/react.component';
import { PartidosComponent} from './partidos/partidos.component';
import { MembrosPartComponent } from './membros-part/membros-part.component';
import { DeputadosComponent } from './deputados/deputados.component';


const routes: Routes = [
  {
    path: 'angular', 
    component: AngularComponent,
  },
  {
    path: 'react', 
    component: ReactComponent,
  },
  {
    path: 'partidos', 
    component: PartidosComponent,
  },

  {
    path: 'partidos/:id/membros', 
    component: MembrosPartComponent,
  },
  {
    path: 'deputados/:id', 
    component: DeputadosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
