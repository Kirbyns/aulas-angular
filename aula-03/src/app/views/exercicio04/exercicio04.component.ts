import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.css']
})
export class Exercicio04Component implements OnInit {

    cachorro01 ="assets/dog01.jpg" ;
    cachorro02 ="assets/dog02.png" ;
    cachorro03 ="assets/dog03.jpg" ;




    styleDog01 ="dog01";
    styleDog02 ="dog02";
    styleDog03 ="dog03";

  constructor() { }

  ngOnInit(): void {
  }

}
