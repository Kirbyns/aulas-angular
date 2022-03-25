import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/model/jogo';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogos = Array<Jogo>();
  recebedorJogos?:Jogo;

  constructor() {
    const mario64 = new Jogo("Super Mario 64","esse é o super mario 64","Nitendo",100);
    const resident = new Jogo("Resident Evil","Resident Evil - pouca munição, muitos zumbis","todas",1000);
    const crash = new Jogo("crash CartRacer","O novo jogo do Crash(não é uma copia de mario)","Playstation",89783981273);

    this.jogos.push(mario64,resident,crash);

   }

  ngOnInit(): void {


  }
  selectJogo(jogo: Jogo){
    this.recebedorJogos = jogo;
  }

  novoJogo(){
    this.recebedorJogos = new Jogo('','','',0);
  }

  salvar(){
    if(this.recebedorJogos){
     this.jogos.push(this.recebedorJogos);
     this.recebedorJogos = undefined;
    }
  }

  cancelar(){
    this.recebedorJogos = undefined;
  }

  remove(pos: number){
    this.jogos.splice(pos, 1);
  }

}
