import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.css']
})
export class Exercicio02Component implements OnInit {


  uppercase():string{
    return "nome teste para uppercase";
  }

  secundaTentativa ="educacao";

  constructor() { }

  ngOnInit(): void {
  }
  paraMaiusculo(palavra:string){
    return palavra.toUpperCase();
  }

}
