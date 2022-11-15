import { Component } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia', // obrigatorio ter o 'app' porque esta configurado no arquivo angular.json
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  transferir(){
    console.log('Solicitada nova transferência');
  }
}
