import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = []; //Iniciar o array

  transferir($event){
    console.log($event);
    const transferencia = {...$event, data: new Date()} //...descontruindo o objeto, e passando as propriedades do evento para a transferencia
    this.transferencias.push(transferencia);
  }
}
