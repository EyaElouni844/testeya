import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
age:number=20;
actif:boolean=false;
chemain:string="../assets/Capture.PNG";
  constructor() { }
vrai(age: number){
if(age>18)
this.actif=true;
return "mineur";
};
  ngOnInit() {
  }

}
