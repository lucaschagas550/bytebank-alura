import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
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

  ngOnInit(): void { //Eh quando for inicializado, estou fazendo um subscribe no observable para obter todas as transferencias
    this.service.todas().subscribe((transferenciasObtidas: Transferencia[]) => {
      console.table(transferenciasObtidas);
      this.transferencias = transferenciasObtidas;
    });
  }

}
