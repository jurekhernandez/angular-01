import { Component } from '@angular/core';

@Component({
    selector :'app-contador',
    template:`
                <h1>{{ titulo }} </h1>
                <h3> la base es {{ base }}</h3>
                <button (click)="cambiar(base);"> +{{ base }} </button>
                <span>{{ contador }}</span>
                <button (click)="cambiar(-base);"> -{{ base }} </button>
    `
})

export class ContadorComponent{
    public titulo:string = 'Contador App';
    public contador:number =10
    public base:number =5
  
    cambiar(valor:number =1){
      this.contador += valor;
    }
}