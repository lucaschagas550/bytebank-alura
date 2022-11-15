import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia', // obrigatorio ter o 'app' porque esta configurado no arquivo angular.json
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{
    @Output() aoTransferir = new EventEmitter<any>(); //evento para saida de dados

  valor: number;
  destino: number;

  transferir(){
    console.log('Solicitada nova transferência valor: ' + this.valor +' para o destino: ' + this.destino);

    const valorEmitir = {valor: this.valor, destino: this.destino}; //criando um objeto para receber o valor e o destino
    this.aoTransferir.emit(valorEmitir);
  }
}
