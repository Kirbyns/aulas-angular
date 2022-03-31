import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio05',
  templateUrl: './exercicio05.component.html',
  styleUrls: ['./exercicio05.component.css'],
})
export class Exercicio05Component implements OnInit {
  numero01 = 0;
  numero02 = 0;
  resultado = 0;
  teste = '';
  constructor() {}

  ngOnInit(): void {}

  change() {
    if (this.teste == 'soma') {
      this.resultado = this.numero01 + this.numero02;
      console.log(this.teste);
      return;
    }
    if (this.teste == 'multi') {
      this.resultado = this.numero01 * this.numero02;
      console.log(this.teste);
      return;
    }
    if (this.teste == 'divisao') {
      this.resultado = this.numero01 / this.numero02;
      console.log(this.teste);
      return;
    }
      this.resultado = this.numero01 - this.numero02;
      console.log(this.teste);

    }
  }

