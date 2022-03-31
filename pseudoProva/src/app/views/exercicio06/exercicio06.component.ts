import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio06',
  templateUrl: './exercicio06.component.html',
  styleUrls: ['./exercicio06.component.css']
})
export class Exercicio06Component implements OnInit {

  texto = '';
  imagem ='';
  constructor() { }

  ngOnInit(): void {
  }

  trocar(){
    this.texto == this.texto.toUpperCase();

    if(this.texto =="THE LAST OF US"){
        this.imagem == '/assets/imagem01.png'
    }
  }
}
