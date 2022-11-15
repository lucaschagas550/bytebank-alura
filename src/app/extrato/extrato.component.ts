import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  //Transferencia recebida vai ser enviada para o html
  @Input() transferencias: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
