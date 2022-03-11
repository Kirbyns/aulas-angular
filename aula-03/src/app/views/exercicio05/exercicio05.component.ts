import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio05',
  templateUrl: './exercicio05.component.html',
  styleUrls: ['./exercicio05.component.css']
})
export class Exercicio05Component implements OnInit {

    cachorro ="assets/dog01.jpg" ;
    styleClass ="tamanho"


  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    if (this.cachorro =="assets/dog01.jpg"){
        this.cachorro ="assets/dog02.png" ;
    }
    else{
      this.cachorro ="assets/dog01.jpg";
    }
  }
}
