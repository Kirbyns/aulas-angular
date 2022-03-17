import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.css']
})
export class Exercicio02Component implements OnInit {

  teste ="";

  constructor() { }

  ngOnInit(): void {
  }

  setValue1() {
    this.teste = 'exercicio01';
  }

  setValue2() {
    this.teste = 'exercicio02';
  }
  setValue3() {
    this.teste = 'osdois';
  }
}
