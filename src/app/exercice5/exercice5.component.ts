import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice5',
  templateUrl: './exercice5.component.html',
  styleUrls: ['./exercice5.component.css']
})
export class Exercice5Component implements OnInit {

  constructor() { }

   tab= [
    {nom:'Popey',image:'../assets/popey.jpg', nb:16, parti:true},
    {nom:'Sam',image:'../assets/happy.jpg', nb:14, parti:false },
    {nom:'Donald',image:'../assets/donald.png', nb:44, parti:false}
    ];
    
  chemain:string="../assets/Capture.PNG";

  ngOnInit() {
  }

}
