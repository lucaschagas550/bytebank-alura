import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-nova-transferencia', // obrigatorio ter o 'app' porque esta configurado no arquivo angular.json
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{
  @Output() aoTransferir = new EventEmitter<any>(); //evento para saida de dados

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir(){
    console.log('Solicitada nova transferĂȘncia valor: ' + this.valor +' para o destino: ' + this.destino);

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}; //criando um objeto para receber o valor e o destino

    this.service.adicionar(valorEmitir).subscribe(resultado => { //Resultado acontece no futuro
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.log(error)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
