import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  styleClass ="divA";
  dizeroi():string{
    return "oi";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
