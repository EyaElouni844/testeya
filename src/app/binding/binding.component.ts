import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
nom:string="eya"; 
age=20;
actif:boolean=true;
taille(){
 
  return  this.nom.length;
}
majuscules(){
  return this.nom.toUpperCase();
}
infos() 
{ return this.nom +" a pour âge " + this.age; }
  constructor() { }

  ngOnInit() {
  }

}
