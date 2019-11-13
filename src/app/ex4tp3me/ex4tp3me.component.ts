import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4tp3me',
  templateUrl: './ex4tp3me.component.html',
  styleUrls: ['./ex4tp3me.component.css']
})
export class Ex4tp3meComponent implements OnInit {
  couleur:string="";
  police:string="";
  theme:string="";
  res:string="";
  t:string="Sombre";
  c:string;
  constructor() { }
onAffiche(){
  return this.res="Resultat";
}
  ngOnInit() {
  }

}
