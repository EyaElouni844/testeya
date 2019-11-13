import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }
  actif:boolean;
  contenu:string;
  onAfficher(nom:string){
    console.log(nom);
  }
  onKeyUp(event:any) { console.log(event.target + " "+ event.target.value); 
  this.contenu = event.target.value; }
  
  ngOnInit() {
  }

}
