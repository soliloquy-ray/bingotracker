import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BingoNumberComponent} from './bingo-number/bingo-number.component';
import {BingoBoardComponent} from './bingo-board/bingo-board.component';

@NgModule({
  declarations: [BingoNumberComponent,BingoBoardComponent],
  imports: [
    CommonModule
  ],
  exports:[BingoNumberComponent,BingoBoardComponent],
})
export class ComponentsModule { }
