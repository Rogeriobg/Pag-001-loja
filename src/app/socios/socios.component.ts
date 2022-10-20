import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.scss']
})
export class SociosComponent  {

@Input() nome:string = 'Rogério';



  constructor() { }


}
