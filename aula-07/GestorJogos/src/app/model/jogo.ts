export class Jogo {
  name: string;
  descricao:string;
  plataforma:string;
  jogadores:number;


  constructor(name:string, descricao:string, plataforma:string, jogadores:number){

    this.name = name;
    this.descricao = descricao;
    this.plataforma = plataforma;
    this.jogadores = jogadores;

  }

}
