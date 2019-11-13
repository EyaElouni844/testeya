import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component implements OnInit {

  constructor() { }
entier1:number;
entier2:number;
calculer(){
  return this.entier1*this.entier2;
}


  ngOnInit() {
  }

}
