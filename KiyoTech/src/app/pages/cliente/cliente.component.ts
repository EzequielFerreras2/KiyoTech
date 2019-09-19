import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  operador1: number;
  operador2:number;
  suma:number;

  constructor() { 
    
  }

  ngOnInit() {
  }

  onSuma (event: Event){
   this.suma=(this.operador1)+(this.operador2);
  }
}
