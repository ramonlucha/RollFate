import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public dices: number[]=[3,3,3,3];
  
    constructor() {

    }

  ngOnInit() {

  } 

  public rollDices(){
    let dicesRandom: number[]=new Array(); 
    for (let index = 0; index < 4; index++) {

      dicesRandom.push(Math.floor(Math.random()*3));

    }
    
    this.dices=dicesRandom;
 
 }

}
