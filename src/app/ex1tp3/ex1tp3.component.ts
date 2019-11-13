import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1tp3',
  templateUrl: './ex1tp3.component.html',
  styleUrls: ['./ex1tp3.component.css']
})
export class Ex1tp3Component implements OnInit {

  constructor() { }

  profils=["Admin", "User", "Visitor"];
  profil="Visitor";
  ngOnInit() {
  }

}
