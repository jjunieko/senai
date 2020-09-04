import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ReactComponent } from "./react/react.component";
import { AngularComponent } from "./angular/angular.component";
import { MatButtonModule } from "@angular/material/button";
import { AppComponent } from "./app.component";
import { MatCardModule } from "@angular/material/card";
import { PartidosComponent } from "./partidos/partidos.component";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";
import { MembrosPartComponent } from "./membros-part/membros-part.component";
import { ConverteUfSiglaEmNomePipe } from "./pipes/converte-uf-sigla-em-nome.pipe";
import { DeputadosComponent } from "./deputados/deputados.component";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormatoDataBrasilPipe } from "./pipes/formato-data-brasil.pipe";
import { FormatarCpfPipe } from "./pipes/formatar-cpf.pipe";
import { TextoEmNegritoDirective } from "./directives/texto-em-negrito.directive";
import { TextColorDirective } from "./directives/text-color.directive";
import { HeroisComponent } from "./herois/herois.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
    FormatarCpfPipe,
    TextoEmNegritoDirective,
    TextColorDirective,
    HeroisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ConverteUfSiglaEmNomePipe,
    FormatoDataBrasilPipe,
    FormatarCpfPipe,
    FormBuilder,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
