import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  loja_visivel: boolean = true;
  stock_visivel: boolean = false;

  MostrarLoja(){
    this.loja_visivel = true;
    this.stock_visivel = false;
  }

  MostrarStock(){
    this.loja_visivel = false;
    this.stock_visivel = true;
  }
}
