import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.scss']
})


export class LojaComponent{

  novo_nome: string = 'Rogério Geraldo transferindo dados de um componente para outro';

 produtos: any[] = [];

 AdicionarAbacaxi(){

  this.produtos.push(
 {
    'icon':'ico_abacaxi.png',
    'nome':'Abacaxi'
   }
 );

 }

 AdicionarBanana(){

  this.produtos.push(
  {
    'icon':'ico_banana.png',
    'nome':'Banana'
  }
);

}

AdicionarLaranja(){

  this.produtos.push(
  {
    'icon':'ico_laranja.png',
    'nome':'Laranja'
  }
);

}

}
