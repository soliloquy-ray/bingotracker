import { Component, OnInit, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {BingoNumberComponent} from '../bingo-number/bingo-number.component';

@Component({
  selector: 'app-bingo-board',
  templateUrl: './bingo-board.component.html',
  styleUrls: ['./bingo-board.component.scss'],
})
export class BingoBoardComponent implements OnInit {

	numbers : Array<number> = [];
	sequence:Array<number> = [];
	elems:Array<{bnc:BingoNumberComponent,i:number}> = [];
	maps:Array<BingoNumberComponent> = [];
	@ViewChildren(BingoNumberComponent) bnc :QueryList<BingoNumberComponent>;
  constructor(private alert: AlertController) {
  	for(let i = 1; i<=75; i++){
  		let bnc = new BingoNumberComponent;
  		this.elems.push({bnc,i});
  	}

  }

  ngOnInit() {
  	
  }

  roll(){
  	let self = this;
  	let al = this.alert.create({
  		message:"New Number!",
  		inputs:[
  			{
  				name:"number",
  				type:"number",
  				min:1,
  				max:75
  			}
  		],
  		buttons:[
  		{
  			text:"Input",
  			handler:(v)=>{
  				self.addNumber(v.number);
  			}		
  		}
  		]
  	});
  	al.then(a=>{
  		a.present();
  	})
  }

  ngAfterViewInit() {
  	this.maps = this.bnc.map(b=>{return b});
  	console.log(this.maps);
  }

  pushToElems(node:BingoNumberComponent){
  	//this.elems.push(node);
  }

  addNumber(val:number){
  	this.sequence.push(val-1);

  	this.maps[val-1].toggleValue();
  }

   reset(){
    let self = this;
    let al = this.alert.create({
      message:"Are you sure you want to start a new game?",
      buttons:[
      {
        text:"Yes",
        handler:(v)=>{
         location.reload();
        }    
      },
      {
        text:"No",
        role:'cancel'
      }
      ]
    });
    al.then(a=>{
      a.present();
    })
   }

}
