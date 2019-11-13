import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  constructor() { } 
 tabNB=[41,18,23,58];
 x:number;
titre:string="Operation sur un tableau";
affich(){
  for(let i=0;i<this.tabNB.length;i++)
  console.log(this.tabNB[i]);
}
minimum(){
  for(let i=0;i<this.tabNB.length;i++)
  if (this.tabNB[i]>this.tabNB[i+1])
  return this.tabNB[i+1];
}
moyenne(){
  for(let i=0;i<this.tabNB.length;i++)

  return this.x=this.tabNB[i]+this.tabNB[i+1]/4;  
}
taille(){
  return this.titre.length;
}
  ngOnInit() {
  }

}
