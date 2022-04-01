import { Injectable } from '@angular/core';
import { Jogo } from '../model/jogo';

@Injectable({ //isso torna a classe injetavel →é para não precisar estanciar alguma coisa.
  providedIn: 'root' //isso indica que está disponivel em todo arquivo
})
export class JogoService {
  private jogos = new Array<Jogo>(); // com private só pode se usar essa variavel aqui
  private idGerado = 1;

  constructor() { }


  inserir(jogo:Jogo){ //salva o jogo na memoria
    jogo.id = this.idGerado;
    this.jogos.push(jogo);
    this.idGerado = this.idGerado++;
  }
  listar(){ //lista todos jogos
    return this.jogos
  }
}
