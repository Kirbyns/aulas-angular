import { Injectable } from '@angular/core';
import { findIndex } from 'rxjs';
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

    this.salvar();
  }
  listar(){ //lista todos jogos
    this.carregar();
    return this.jogos

  }
  remover(id?:number){
    this.jogos = this.jogos.filter((jogo) => {   //isso aqui é uma arrow function, pesquisar melhor para entender.
      return id != jogo.id;


    });
    this.salvar();
   /* for(let i = 0; i < this.jogos.length; i++){
        if(id === this.jogos[i].id){
          this.jogos.splice(i, 1);
          break;
        }
    } */

  }

  editar(jogo:Jogo){
   const indice = this.jogos.findIndex((j) => {
      return j.id ===  jogo.id;
    });

    if(indice >= 0 ) {
      this.jogos[indice] = jogo;
    }
    this.salvar();
  }

  salvar(){
    localStorage.setItem('idGerado',this.idGerado.toString());
    localStorage.setItem('jogos',JSON.stringify(this.jogos)); //transforma o vetor em string
  }

  carregar(){
    const idGeradoSalvo = localStorage.getItem('idGerado');
    if(idGeradoSalvo){
      this.idGerado =  Number(idGeradoSalvo);
    }
    const jogosSalvos =  localStorage.getItem('jogos');
    if(jogosSalvos){
      this.jogos = JSON.parse(jogosSalvos);
    }


  }
}
