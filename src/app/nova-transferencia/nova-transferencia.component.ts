import { Component } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia', // obrigatorio ter o 'app' porque esta configurado no arquivo angular.json
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{
  valor: number;
  destino: number;

  transferir(){
    console.log('Solicitada nova transferência valor: ' + this.valor +
     ' para o destino: ' + this.destino);
  }
}
