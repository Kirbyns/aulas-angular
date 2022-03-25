export class Movie {
  name: string;
  rating:number; // é possivel tambem criar com o ponto de interregoção porem ele é menos usado. rating:?number; dessa maneira não preciso colocar

  constructor(name:string, rating:number){
    this.name = name; // o this é sempre o objeto da classe e o sem o this é o de dentro do construtor
    this.rating = rating;

  }

}
