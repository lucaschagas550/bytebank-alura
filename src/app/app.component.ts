import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  constructor(private service: TransferenciaService) {}

  transferir($event){ //Pega o evento e propaga para o service de transferencia
    this.service.adicionar($event);
  }
}
