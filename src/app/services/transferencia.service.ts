import { Injectable } from '@angular/core';

//Service eh singleton
@Injectable({
  providedIn: 'root' //Pertence a um modulo, no caso o app.module.ts, se tivesse outro, teria que especificar
})

export class TransferenciaService {

  private listaTransferencia: any[];

constructor() {
  this.listaTransferencia = [];
}

get transferencias(){
  return this.listaTransferencia;
}

adicionar(transferencia: any){
  this.hidratar(transferencia);
  this.listaTransferencia.push(transferencia);
}

private hidratar(transferencia: any){
  transferencia.data = new Date()
  };
}
