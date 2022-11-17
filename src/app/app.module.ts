import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

//Index Html => AppComponent => AppModule
//Declarar novos componentes
@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, //Modulo de formulario, autoimport por causa das extenções instaladas
    HttpClientModule // Contem modulo HttpClient
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-br'}, // Hora padrao para o aplicativo
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'} //Moeda padrao para o aplicativo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
