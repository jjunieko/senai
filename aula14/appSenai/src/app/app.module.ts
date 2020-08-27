import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactComponent } from './react/react.component';
import { AngularComponent } from './angular/angular.component';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';

import {MatFormFieldModule} from '@angular/material/form-field';
import { PartidosComponent } from './partidos/partidos.component';

import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MembrosPartComponent } from './membros-part/membros-part.component';
import { ConverteUfSiglaEmNomePipe } from './pipes/converte-uf-sigla-em-nome.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ReactComponent,
    AngularComponent,
    PartidosComponent,
    MembrosPartComponent,
    ConverteUfSiglaEmNomePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [ConverteUfSiglaEmNomePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
