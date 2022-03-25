import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies = Array<Movie>();
  curMovie?:Movie;

  constructor() {
      //adicionando filmes ao array Movie, declarado a cima.
    const matrix = new Movie("Matrix", 5); // coom o construtor na model ele te obriga a passar o nome e o rating
    this.movies.push(matrix); //push força para a ultima posição do array

    const batman = new Movie("The batman", 3);
    this.movies.push(batman);

    const memento = new Movie("Memento", 5);
    this.movies.push(memento);
  }

  ngOnInit(): void {
  }
  selectMovie(movie: Movie){
    this.curMovie = movie;
  }

  newMovie(){
    this.curMovie = new Movie('',0);
  }

  save(){
    if(this.curMovie){
     this.movies.push(this.curMovie);
    }
  }

}
