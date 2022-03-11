import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.css']
})
export class Exercicio03Component implements OnInit {

  imagemVetor=['../assets/imagem1.png','../assets/imagem2.png','../assets/imagem3.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
