import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TableauComponent } from './tableau/tableau.component';
import { PersonneComponent } from './personne/personne.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Exercice4Component } from './exercice4/exercice4.component';
import { Exercice5Component } from './exercice5/exercice5.component';
import { Part1tp3Component } from './part1tp3/part1tp3.component';
import { Ex1tp3Component } from './ex1tp3/ex1tp3.component';
import { Part2tp3Component } from './part2tp3/part2tp3.component';
import { Ex2tp3Component } from './ex2tp3/ex2tp3.component';
import { Ex3tp3Component } from './ex3tp3/ex3tp3.component';
import { Ex4tp3Component } from './ex4tp3/ex4tp3.component';
import { Ex4tp3meComponent } from './ex4tp3me/ex4tp3me.component';
import { AppTp4Component } from './app-tp4/app-tp4.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TableauComponent,
    PersonneComponent,
    EventbindingComponent,
    Exercice3Component,
    Exercice4Component,
    Exercice5Component,
    Part1tp3Component,
    Ex1tp3Component,
    Part2tp3Component,
    Ex2tp3Component,
    Ex3tp3Component,
    Ex4tp3Component,
    Ex4tp3meComponent,
    AppTp4Component,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
