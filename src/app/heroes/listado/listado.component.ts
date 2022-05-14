import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  public heroes:string[]=["uno","dos","tres","cuatro"];
  public borrado:string='';

  public borrarHeroe(indice:number =1){
    this.borrado = this.heroes.shift() || '' ;
  }
}
