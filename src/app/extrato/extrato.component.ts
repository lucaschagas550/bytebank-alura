import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  //Transferencia recebida vai ser enviada para o html
  transferencias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void { //Eh quando for inicializado
    this.transferencias = this.service.transferencias;
  }

}
