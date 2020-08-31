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
import { DeputadosComponent } from './deputados/deputados.component';

import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormatoDataBrasilPipe } from './pipes/formato-data-brasil.pipe';
import { FormatarCpfPipe } from './pipes/formatar-cpf.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ReactComponent,
    AngularComponent,
    PartidosComponent,
    MembrosPartComponent,
    ConverteUfSiglaEmNomePipe,
    DeputadosComponent,
    FormatoDataBrasilPipe,
    FormatarCpfPipe
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
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ConverteUfSiglaEmNomePipe, FormatoDataBrasilPipe, FormatarCpfPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
