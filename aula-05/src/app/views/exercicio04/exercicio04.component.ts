import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.css']
})
export class Exercicio04Component implements OnInit {


  vetorPaises =['Brasil','Alemanha','Russia','Italia'];
  vetorPaisesImagens =['../assets/brasil.png','../assets/alemanha.png','../assets/russia.png','../assets/italia.png'];

  constructor() { }

  ngOnInit(): void {
  }

  mostrarNome(pais:string){
      alert(pais);
  }
}
