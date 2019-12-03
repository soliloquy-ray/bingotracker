import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bingo-number',
  templateUrl: './bingo-number.component.html',
  styleUrls: ['./bingo-number.component.scss'],
})
export class BingoNumberComponent implements OnInit {

	@Input('on') on:boolean = false;
	@Input('number') number:number = null;
	@Input('turn') turn:number = 0;
  constructor() { }

  ngOnInit() {}

  public toggleValue():boolean{
  	this.on = !this.on;
  	return this.on;
  }

  public setTurn(val:number):number{
  	this.turn = val;
  	return this.getTurn();
  }

  public getTurn():number{
  	return this.turn;
  }

}
