import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio05',
  templateUrl: './exercicio05.component.html',
  styleUrls: ['./exercicio05.component.css']
})
export class Exercicio05Component implements OnInit {

  numero01 = 0;
  numero02 = 0;
  resultado =0;

  constructor() { }

  ngOnInit(): void {
  }

  soma(){
    this.numero01+this.numero02===this.resultado
  }

}
