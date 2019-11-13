import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
entier:number;
entier1:number;
somme:number=0;

  constructor() { }

  onKeyUp(event:any) {
  console.log(event.target + " "+ event.target.value); 
  parseInt(this.entier = event.target.value ); }

onsomme(number:number)
{
this.somme=Number(number)+(this.entier);
}

 /* onKeyUp1(event:any) {
  console.log(event.target + " "+ event.target.value); 
  parseInt( this.entier1 = event.target.value); }*/
  
 
  ngOnInit() {
  }

}
