import { Component, OnInit } from '@angular/core';
import { read } from 'fs';

@Component({
  selector: 'app-ex4tp3',
  templateUrl: './ex4tp3.component.html',
  styleUrls: ['./ex4tp3.component.css']
})
export class Ex4tp3Component implements OnInit {
  couleur:string="";
  police:string="";
  theme:string="";
  res:string="";
  t:string="Sombre";
  c:string;
  Onaffiche()
  {
    this.res="Résultat";
  }
  constructor() { }

  ngOnInit() {
  }

}
