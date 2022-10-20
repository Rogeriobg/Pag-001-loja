import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent  {
total_abacaxis: number = 0;
total_bananas: number = 0;
total_laranjas: number = 0;


AdicionarAbacaxi(){
  this.total_abacaxis++;
}
AdicionarBanana(){
  this.total_bananas++;
}
AdicionarLaranja(){
  this.total_laranjas++;
}


RemoverAbacaxi(){
  this.total_abacaxis--;
}
RemoverBanana(){
  this.total_bananas--;
}
RemoverLaranja(){
  this.total_laranjas--;
}

CalcularTotal(){
  return this.total_abacaxis + this.total_bananas + this.total_laranjas
}


EstiloAbacaxis(){
  let estilo = 'white';
  if(this.total_abacaxis <=0)
  estilo = 'red';
  return estilo;
}

EstiloBananas(){
  let estilo = 'white';
  if(this.total_bananas <=0)
  estilo = 'red';
  return estilo;
}

EstiloLaranjas(){
  let estilo = 'white';
  if(this.total_laranjas <=0)
  estilo = 'red';
  return estilo;
}

}
