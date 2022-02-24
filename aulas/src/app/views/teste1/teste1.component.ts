import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste1',
  templateUrl: './teste1.component.html',
  styleUrls: ['./teste1.component.css']
})
export class Teste1Component implements OnInit {
  frase ="uma frase qualquer para teste"

  constructor() { }

  ngOnInit(): void {
  }

}
