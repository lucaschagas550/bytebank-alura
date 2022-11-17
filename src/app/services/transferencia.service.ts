import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

//Service eh singleton
@Injectable({
  providedIn: 'root' //Pertence a um modulo, no caso o app.module.ts, se tivesse outro, teria que especificar
})

export class TransferenciaService {
  private listaTransferencia: any[];
  private url = "http://localhost:3000/transferencias";

constructor(private httpClient: HttpClient) {
  this.listaTransferencia = [];
}

  get transferencias(){
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{ // Observable retorna a resposta em algum futuro
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any){
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date()
    };
}
