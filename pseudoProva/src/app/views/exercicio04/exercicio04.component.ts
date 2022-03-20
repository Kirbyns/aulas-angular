import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.css']
})
export class Exercicio04Component implements OnInit {
  imagem ='imagem01';

  constructor() { }

  ngOnInit(): void {
  }

  mudar(){
    if(this.imagem =="imagem01"){
      this.imagem ="imagem02" ;

    } else if(this.imagem =="imagem02"){
      this.imagem ="imagem03";

    }else{
      this.imagem ="imagem01";
    }



  }

}
