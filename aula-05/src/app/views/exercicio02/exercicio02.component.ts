import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.css']
})
export class Exercicio02Component implements OnInit {

  valor01=0;
  valor02 =0;
  result = 0;



  constructor() {


   }



  ngOnInit(): void {
  }
  calcular(operador:string){
    if(operador =='+'){
      this.result = this.valor01  + this.valor02;
    }
    else if(operador =='-'){
      this.result = this.valor01  - this.valor02;
    }
    else if(operador =='/'){
      this.result = this.valor01  / this.valor02;
    }
    else if(operador =='*'){
      this.result = this.valor01  / this.valor02;
    }
  }


}
