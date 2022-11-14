import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Index Html => AppComponent => AppModule
//Declarar novos componentes
@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
