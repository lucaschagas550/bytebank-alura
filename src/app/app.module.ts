import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Index Html => AppComponent => AppModule
//Declarar novos componentes
@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule //Modulo de formulario, autoimport por causa das extenções instaladas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
