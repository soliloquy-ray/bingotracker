(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{L6id:function(f,v,e){"use strict";e.r(v);var r=e("CcnG"),n=function(){return function(){}}(),h=e("pMnS"),m=e("oBZk"),t=e("ZZ/e"),w=e("Ip0R"),o=function(){function f(){this.on=!1,this.number=null,this.turn=0}return f.prototype.ngOnInit=function(){},f.prototype.toggleValue=function(){return this.on=!this.on,this.on},f.prototype.setTurn=function(f){return this.turn=f,this.getTurn()},f.prototype.getTurn=function(){return this.turn},f}(),l=r.rb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:inline-table;border-radius:100%;height:8vh;width:8vh;margin:2vh;white-space:nowrap;overflow:hidden;position:relative;border:1vh solid #8b0000;box-shadow:0 0 5px 2px gold}[_nghost-%COMP%]   div[_ngcontent-%COMP%]{position:relative;background-color:#fff;height:100%;width:100%;opacity:.8}[_nghost-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;height:auto;width:100%;left:0;top:0;margin:auto;font-size:4vh;color:#555;text-shadow:0 0 5px #e0ffff;font-family:bingo;font-weight:400}[_nghost-%COMP%]   div.on[_ngcontent-%COMP%]{background-color:#228b22;opacity:1}[_nghost-%COMP%]   div.on[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:bolder;font-size:4.5vh;top:-.5vh;color:gold;text-shadow:1px 1px 5px #000}"]],data:{}});function i(f){return r.Kb(0,[(f()(),r.tb(0,0,null,null,5,"div",[],null,null,null,null,null)),r.Gb(512,null,w.p,w.q,[r.s,r.t,r.k,r.D]),r.sb(2,278528,null,0,w.h,[w.p],{ngClass:[0,"ngClass"]},null),r.Fb(3,{on:0}),(f()(),r.tb(4,0,null,null,1,"span",[],null,null,null,null,null)),(f()(),r.Jb(5,null,["",""]))],(function(f,v){var e=f(v,3,0,v.component.on);f(v,2,0,e)}),(function(f,v){f(v,5,0,v.component.number)}))}var u=function(){function f(f){this.alert=f,this.numbers=[],this.sequence=[],this.elems=[],this.maps=[];for(var v=1;v<=75;v++){var e=new o;this.elems.push({bnc:e,i:v})}}return f.prototype.ngOnInit=function(){},f.prototype.roll=function(){var f=this;this.alert.create({message:"New Number!",inputs:[{name:"number",type:"number",min:1,max:75}],buttons:[{text:"Input",handler:function(v){f.addNumber(v.number)}}]}).then((function(f){f.present()}))},f.prototype.ngAfterViewInit=function(){this.maps=this.bnc.map((function(f){return f})),console.log(this.maps)},f.prototype.pushToElems=function(f){},f.prototype.addNumber=function(f){this.sequence.push(f-1),this.maps[f-1].toggleValue()},f.prototype.reset=function(){this.alert.create({message:"Are you sure you want to start a new game?",buttons:[{text:"Yes",handler:function(f){location.reload()}},{text:"No",role:"cancel"}]}).then((function(f){f.present()}))},f}(),a=r.rb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;height:100%;width:100%}[_nghost-%COMP%]   div.container[_ngcontent-%COMP%]{height:100%;width:100%;display:block;background-color:#006400;padding:5vw;text-align:center;position:relative}[_nghost-%COMP%]   div.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:5vh;position:absolute;width:100%;text-align:left;text-indent:5vh;top:0;left:0;color:gold;text-shadow:1px 1px 5px #000}[_nghost-%COMP%]   div.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   button[ion-button][_ngcontent-%COMP%]{padding:1vh;font-size:4vh;border-radius:8px;display:inline-block;margin-left:5vh;background-color:#dc143c;color:#ddd;text-shadow:1px 1px 5px #000}[_nghost-%COMP%]   div.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   button[ion-button].yelo[_ngcontent-%COMP%]{background-color:gold}[_nghost-%COMP%]   div.container[_ngcontent-%COMP%]   .inner-board[_ngcontent-%COMP%]{height:100%;width:100%;position:relative;display:inline-block;background-image:url(christmasred.0b1178e2b1108fcea024.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;border-radius:8px}[_nghost-%COMP%]   div.container[_ngcontent-%COMP%]   .inner-board[_ngcontent-%COMP%]   app-bingo-number[_ngcontent-%COMP%]{cursor:pointer}"]],data:{}});function c(f){return r.Kb(0,[(f()(),r.tb(0,0,null,null,1,"app-bingo-number",[],[[8,"id",0]],[[null,"click"]],(function(f,v,e){var r=!0;return"click"===v&&(r=!1!==f.component.addNumber(f.context.$implicit.i)&&r),r}),i,l)),r.sb(1,114688,[[1,4]],0,o,[],{number:[0,"number"]},null)],(function(f,v){f(v,1,0,v.context.$implicit.i)}),(function(f,v){f(v,0,0,"b"+v.context.$implicit.i)}))}function s(f){return r.Kb(0,[r.Hb(671088640,1,{bnc:1}),(f()(),r.tb(1,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(f()(),r.tb(2,0,null,null,5,"p",[],null,null,null,null,null)),(f()(),r.Jb(-1,null,["Bingo Time!"])),(f()(),r.tb(4,0,null,null,1,"button",[["ion-button",""]],null,[[null,"click"]],(function(f,v,e){var r=!0;return"click"===v&&(r=!1!==f.component.roll()&&r),r}),null,null)),(f()(),r.Jb(-1,null,["Number"])),(f()(),r.tb(6,0,null,null,1,"button",[["class","yelo"],["ion-button",""]],null,[[null,"click"]],(function(f,v,e){var r=!0;return"click"===v&&(r=!1!==f.component.reset()&&r),r}),null,null)),(f()(),r.Jb(-1,null,["New Game"])),(f()(),r.tb(8,0,null,null,2,"div",[["class","inner-board"]],null,null,null,null,null)),(f()(),r.ib(16777216,null,null,1,null,c)),r.sb(10,278528,null,0,w.i,[r.O,r.L,r.s],{ngForOf:[0,"ngForOf"]},null)],(function(f,v){f(v,10,0,v.component.elems)}),null)}var b=function(){return function(){}}(),p=r.rb({encapsulation:0,styles:[["[_nghost-%COMP%]{overflow:hidden;width:100vw;height:100vh;background:radial-gradient(farthest-corner at 30vw 20vh,#7397a1 1%,#3f2c41 100%)}[_nghost-%COMP%]   .snow[_ngcontent-%COMP%]{border-radius:50%;opacity:.8;position:absolute;top:-100vh;-webkit-animation-name:fall;animation-name:fall;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}[_nghost-%COMP%]   .layer1[_ngcontent-%COMP%]{width:.5rem;height:.5rem;-webkit-filter:blur(1.5px);filter:blur(1.5px);box-shadow:92.8vw 76.3vh 0 -.41rem#fff,94.2vw 15.2vh 0 -.44rem#fff,54.5vw 66.4vh 0 -.32rem#fff,91.6vw 28.5vh 0 -.05rem#fff,60.4vw 72.6vh 0 -.33rem#fff,22.8vw 25.1vh 0 -.35rem#fff,6.2vw 63vh 0 -.5rem#fff,76.3vw 9.2vh 0 -.26rem#fff,87vw 9.5vh 0 -.25rem#fff,88.3vw 60vh 0 -.45rem#fff,59.5vw 3.4vh 0 -.22rem#fff,63vw 16.1vh 0 -.08rem#fff,59vw 51.8vh 0 -.2rem#fff,33vw 40vh 0 -.18rem#fff,22.3vw 95.7vh 0 -.19rem#fff,45.7vw 71.9vh 0 -.43rem#fff,59.9vw 14vh 0 -.31rem#fff,90.8vw 83.5vh 0 -.11rem#fff,68.2vw 73.5vh 0 -.21rem#fff,57.8vw 9.5vh 0 -.43rem#fff,45.1vw 89.1vh 0 -.01rem#fff,18.9vw 27.5vh 0 -.39rem#fff,97.9vw 50.9vh 0 -.31rem#fff,98.3vw 81.5vh 0 -.14rem#fff,58.8vw 74.1vh 0 -.35rem#fff,95.5vw 54.1vh 0 -.27rem#fff,43.7vw 9.4vh 0 -.19rem#fff,32.4vw 99.4vh 0 -.39rem#fff,23.6vw 19.8vh 0 -.38rem#fff,62.6vw 76.6vh 0 -.49rem#fff,36.2vw 80.9vh 0 -.04rem#fff,53.1vw 27.9vh 0 -.13rem#fff,20.3vw 5.3vh 0 -.46rem#fff,29.6vw 92.1vh 0 -.45rem#fff,93.5vw 72.6vh 0 -.15rem#fff,82.4vw 72.3vh 0 -.31rem#fff,30.4vw 67.1vh 0 -.24rem#fff,56.3vw 24.6vh 0 -.37rem#fff,30.3vw 83.4vh 0 -.19rem#fff,60.9vw 62.3vh 0 -.1rem#fff,42.6vw 72.6vh 0 -.14rem#fff,16.8vw 66.5vh 0 -.07rem#fff,48.4vw 70.2vh 0 -.01rem#fff,38.6vw 51.4vh 0 -.18rem#fff,32.6vw 97.1vh 0 -.29rem#fff,12.5vw 99.7vh 0 -.36rem#fff,19vw 84vh 0 -.24rem#fff,76.8vw 43.1vh 0 -.24rem#fff,89.8vw 58.8vh 0 -.35rem#fff,49.9vw 15.1vh 0 -.04rem#fff,85.7vw 25.4vh 0 -.5rem#fff,35.7vw 38vh 0 -.36rem#fff,28.9vw 64.8vh 0 -.36rem#fff,73.7vw 83vh 0 -.1rem#fff,6.2vw 38.6vh 0 -.34rem#fff,15.9vw 65.1vh 0 -.1rem#fff,89.4vw 74.6vh 0 -.32rem#fff,27.5vw 26.7vh 0 -.1rem#fff,93.8vw 57.5vh 0 -.38rem#fff,42.4vw 85.2vh 0 -.26rem#fff,74.5vw 29.5vh 0 -.04rem#fff,74.3vw 74.4vh 0 -.35rem#fff,42.4vw 92.9vh 0 -.43rem#fff,95.1vw 62.8vh 0 -.5rem#fff,98.5vw 44.5vh 0 -.11rem#fff,62.7vw 2.8vh 0 -.35rem#fff,68.8vw 60.9vh 0 -.14rem#fff,25.2vw 86.6vh 0 -.21rem#fff,24.7vw 55.1vh 0 -.39rem#fff,3.1vw 97.6vh 0 -.45rem#fff,80.7vw 84.3vh 0 -.35rem#fff,16.9vw 17.3vh 0 -.09rem#fff,48.4vw 2vh 0 -.01rem#fff,84.8vw 52.3vh 0 -.04rem#fff,54vw 12.8vh 0 -.05rem#fff,66.9vw 38vh 0 -.06rem#fff,76.2vw 75.7vh 0 -.14rem#fff,92.3vw 16.5vh 0 -.04rem#fff,6.2vw 11.6vh 0 -.42rem#fff,27.6vw 19.5vh 0 -.47rem#fff,2.2vw 97.3vh 0 -.43rem#fff,28.8vw 94vh 0 -.17rem#fff,95.2vw 13.6vh 0 -.43rem#fff,80.1vw 17.7vh 0 -.18rem#fff,79.1vw 42vh 0 -.26rem#fff,1.9vw 94.3vh 0 -.05rem#fff,82.6vw 36.6vh 0 -.02rem#fff,16.9vw 72.5vh 0 -.02rem#fff,3.6vw 79vh 0 -.26rem#fff,77.9vw 63vh 0 -.11rem#fff,67.3vw 79vh 0 -.41rem#fff,69.2vw 24.4vh 0 -.12rem#fff,17.8vw 77.9vh 0 -.02rem#fff,24.4vw 81vh 0 -.39rem#fff,59vw 58.7vh 0 -.15rem#fff,10.6vw 63.5vh 0 -.19rem#fff,16.3vw 40.9vh 0 -.16rem#fff,89.3vw 18.4vh 0 -.35rem#fff,58vw 52.5vh 0 -.16rem#fff,80.3vw 9.2vh 0 -.1rem#fff,69.6vw 79.4vh 0 -.45rem#fff,34.1vw 44.9vh 0 -.13rem#fff,35vw 84.2vh 0 -.46rem#fff,55.3vw 88.6vh 0 -.39rem#fff,95.9vw 53.7vh 0 -.17rem#fff,25.4vw 43.2vh 0 -.11rem#fff,78.3vw 67vh 0 -.4rem#fff,28.6vw 52.3vh 0 -.44rem#fff,20.2vw 44.6vh 0 -.43rem#fff,32.1vw 63.1vh 0 -.24rem#fff,36.8vw 70.7vh 0 -.18rem#fff,42.4vw 29vh 0 -.33rem#fff,91.7vw 15.3vh 0 -.05rem#fff,39.7vw 86.2vh 0 -.18rem#fff,66.8vw 45.7vh 0 -.26rem#fff,51vw 99.3vh 0 -.21rem#fff,34vw 45.8vh 0 -.37rem#fff,80.8vw 21.9vh 0 -.29rem#fff,22.7vw 64.3vh 0 -.19rem#fff,39.3vw 30.9vh 0 -.17rem#fff,91.5vw 3.9vh 0 -.08rem#fff,59.8vw 19.1vh 0 -.25rem#fff,66.1vw 30.3vh 0 -.41rem#fff,18.9vw 88.8vh 0 -.17rem#fff,3.8vw 32.2vh 0 -.33rem#fff,37.8vw 72.7vh 0 -.48rem#fff,40.3vw 53.2vh 0 -.14rem#fff,61.6vw 12.2vh 0 -.5rem#fff,47.9vw 9.7vh 0 -.08rem#fff,18.8vw 76.1vh 0 -.05rem#fff,58.7vw 77.4vh 0 -.1rem#fff,81.1vw 65.9vh 0 -.34rem#fff,.8vw 36.2vh 0 -.02rem#fff,50vw 37.5vh 0 -.19rem#fff,89.1vw 53.4vh 0 -.32rem#fff,47.2vw 49.4vh 0 -.49rem#fff,92.7vw 6.3vh 0 -.1rem#fff,87.1vw 24.6vh 0 -.3rem#fff,62vw 24.5vh 0 -.14rem#fff,2.2vw 27.6vh 0 -.32rem#fff,39.6vw 60vh 0 -.35rem#fff,33.1vw 42.4vh 0 -.45rem#fff,94.6vw 93.4vh 0 -.16rem#fff,19.8vw 98.2vh 0 -.37rem#fff,53.2vw 31.7vh 0 -.14rem#fff,10.8vw 46.8vh 0 -.18rem#fff,50.9vw 64.5vh 0 -.1rem#fff,45.8vw 43.6vh 0 -.24rem#fff,48.1vw 29.8vh 0 -.43rem#fff,34.3vw 51.6vh 0 -.43rem#fff,47.2vw 57.7vh 0 -.24rem#fff,2.1vw 45.6vh 0 -.18rem#fff,82.2vw 73vh 0 -.27rem#fff,1.6vw 41.1vh 0 -.06rem#fff,47.4vw 33.3vh 0 -.33rem#fff,78.3vw 2.7vh 0 -.37rem#fff,64.5vw 51.3vh 0 -.48rem#fff,99.3vw 87.8vh 0 -.24rem#fff,60.9vw 86vh 0 -.09rem#fff,93vw 49.2vh 0 -.49rem#fff,72.5vw 42.3vh 0 -.14rem#fff,27.5vw 10.7vh 0 -.2rem#fff,4.5vw 53.8vh 0 -.38rem#fff,67.6vw 59.4vh 0 -.49rem#fff,4.5vw 48.3vh 0 -.11rem#fff,20.3vw 77.6vh 0 -.05rem#fff,2.9vw 53.4vh 0 -.48rem#fff,64vw 16.2vh 0 -.06rem#fff,32.4vw 63.9vh 0 -.3rem#fff,40.5vw 44.8vh 0 -.23rem#fff,75.5vw 98.6vh 0 -.15rem#fff,56.4vw 63.5vh 0 -.11rem#fff,3vw 71.4vh 0 -.26rem#fff,57.5vw 97vh 0 -.34rem#fff,30.3vw 61.5vh 0 -.37rem#fff,70.8vw 38.6vh 0 -.23rem#fff,49.7vw 10.3vh 0 -.03rem#fff,27.3vw 8.7vh 0 -.09rem#fff,76.6vw 75.2vh 0 -.07rem#fff,19vw 4.9vh 0 -.17rem#fff,75.6vw 38.7vh 0 -.29rem#fff,77.6vw 58vh 0 -.27rem#fff,39.2vw 29.4vh 0 -.05rem#fff,31.2vw 19.5vh 0 -.26rem#fff,52.3vw 59.2vh 0 -.34rem#fff,52vw 63vh 0 -.43rem#fff,72.3vw 92.2vh 0 -.19rem#fff,76.4vw 96.3vh 0 -.3rem#fff,69.3vw 44.3vh 0 -.21rem#fff,63.9vw 34.9vh 0 -.17rem#fff,27vw 82.7vh 0 -.33rem#fff,23.9vw 14.5vh 0 -.41rem#fff,80vw 30.9vh 0 -.43rem#fff,46.9vw 96.9vh 0 -.05rem#fff,9.3vw 82.4vh 0 -.28rem#fff,46.3vw 86.4vh 0 -.36rem#fff,88.6vw 52vh 0 -.02rem#fff,64vw 99vh 0 -.18rem#fff,15.4vw 14.4vh 0 -.16rem#fff,31.3vw 7.3vh 0 -.37rem#fff,18.2vw 85.1vh 0 -.16rem#fff,77.6vw 80.5vh 0 -.01rem#fff,25.1vw 67.7vh 0 -.33rem#fff,11.8vw 22.1vh 0 -.1rem#fff,74.1vw 97.8vh 0 -.43rem#fff,67.9vw 92.4vh 0 -.5rem#fff,77.1vw 8.2vh 0 -.07rem#fff,5.3vw 78.4vh 0 -.05rem#fff,60.5vw 15.5vh 0 -.05rem#fff,69.9vw 31vh 0 -.44rem#fff,33vw 78.7vh 0 -.09rem#fff,44.1vw 9.9vh 0 -.43rem#fff,67.7vw 3.4vh 0 -.2rem#fff,59.4vw 12.2vh 0 -.04rem#fff,41.2vw 3.5vh 0 -.34rem#fff,46vw 68.2vh 0 -.32rem#fff,77.9vw 2.4vh 0 -.02rem#fff,64.1vw 56.1vh 0 -.1rem#fff,99vw 21.1vh 0 -.05rem#fff,20.4vw 76.7vh 0 -.19rem#fff,69.2vw 75.5vh 0 -.12rem#fff,60.9vw 73.7vh 0 -.06rem#fff,69.8vw 18.6vh 0 -.05rem#fff,32.9vw 78.5vh 0 -.5rem#fff,37.7vw 79.2vh 0 -.43rem#fff,100vw 20.9vh 0 -.35rem#fff,85vw 35.4vh 0 -.49rem#fff,3.5vw 58.1vh 0 -.3rem#fff,10.6vw 14.9vh 0 -.06rem#fff,42.1vw 45.3vh 0 -.49rem#fff,83.8vw 8.1vh 0 -.06rem#fff,32.2vw 29.1vh 0 -.26rem#fff,61.2vw 82.3vh 0 -.36rem#fff,93.1vw 82.1vh 0 -.03rem#fff,43.6vw 94.8vh 0 -.41rem#fff,.7vw 39.5vh 0 -.45rem#fff,31.7vw 58.1vh 0 -.01rem#fff,13.9vw 65.8vh 0 -.31rem#fff,20vw 78.3vh 0 -.5rem#fff,16.7vw 20vh 0 -.46rem#fff,87.3vw 35.5vh 0 -.4rem#fff,53.1vw 36.4vh 0 -.31rem#fff,14.9vw 74.6vh 0 -.19rem#fff,69.2vw 84.7vh 0 -.04rem#fff,45vw 82.1vh 0 -.5rem#fff,33.3vw 36.6vh 0 -.26rem#fff,7.7vw 1.5vh 0 -.09rem#fff,51.6vw 58.5vh 0 -.13rem#fff,44.8vw 64.6vh 0 -.09rem#fff,47.2vw 37vh 0 -.28rem#fff,3vw 23.8vh 0 -.04rem#fff,1.7vw 66.4vh 0 -.42rem#fff,49.2vw 94.3vh 0 -.1rem#fff,58.8vw 6.4vh 0 -.4rem#fff,51.1vw 42.9vh 0 -.02rem#fff,64.3vw 49.4vh 0 -.08rem#fff,53.1vw 13.1vh 0 -.11rem#fff,7.5vw 2.1vh 0 -.47rem#fff,35vw 38.7vh 0 -.47rem#fff,56.3vw 86.1vh 0 -.01rem#fff,15.8vw 63.2vh 0 -.33rem#fff,7.7vw 72.6vh 0 -.01rem#fff,92vw 36.8vh 0 -.17rem#fff,59.5vw 13.6vh 0 -.45rem#fff,64.6vw 100vh 0 -.49rem#fff,58.3vw 37.7vh 0 -.09rem#fff,39.2vw 90.9vh 0 -.07rem#fff,81.4vw 37.3vh 0 -.02rem#fff,19.5vw 52.9vh 0 -.15rem#fff,97.5vw 85.4vh 0 -.35rem#fff,30.6vw 4.5vh 0 -.08rem#fff,75.8vw 55.6vh 0 -.28rem#fff,24.6vw 89.7vh 0 -.01rem#fff,20.5vw 53.7vh 0 -.44rem#fff,66vw 41.6vh 0 -.24rem#fff,.8vw 56.3vh 0 -.02rem#fff,92.7vw 20vh 0 -.07rem#fff,18.6vw 59vh 0 -.43rem#fff,2vw 94.6vh 0 -.2rem#fff,38.5vw 91.6vh 0 -.46rem#fff,7.5vw 93.4vh 0 -.08rem#fff,15.8vw 15vh 0 -.31rem#fff,47.7vw 11vh 0 -.42rem#fff,16.2vw 45.3vh 0 -.47rem#fff,84.3vw 22.7vh 0 -.35rem#fff,61.5vw 98.4vh 0 -.27rem#fff,59.4vw 10.6vh 0 -.01rem#fff,61.4vw 59.6vh 0 -.25rem#fff,48.6vw 80vh 0 -.4rem#fff,96.9vw 71vh 0 -.04rem#fff,3.8vw 50.2vh 0 -.35rem#fff,20.3vw 81.7vh 0 -.03rem#fff,71.3vw 39.9vh 0 -.09rem#fff,5.1vw 77.3vh 0 -.23rem#fff,50.7vw 24.5vh 0 -.05rem#fff,38.7vw 15.8vh 0 -.17rem#fff,26vw 84.3vh 0 -.07rem#fff,78.8vw 8.1vh 0 -.17rem#fff,87.3vw 39.4vh 0 -.21rem#fff,61.8vw 12.4vh 0 -.5rem#fff,42.2vw 11vh 0 -.4rem#fff,77.7vw 43.6vh 0 -.49rem#fff,82.2vw 3.8vh 0 -.33rem#fff,95.7vw 30.2vh 0 -.1rem#fff,70vw 59.1vh 0 -.21rem#fff,3.3vw 67.3vh 0 -.01rem#fff,65vw 2.6vh 0 -.15rem#fff,30.3vw 25.7vh 0 -.19rem#fff,63vw 34vh 0 -.07rem#fff,47.3vw 82.5vh 0 -.05rem#fff,66.3vw 15.9vh 0 -.39rem#fff,92.7vw 93.3vh 0 -.08rem#fff,43.1vw 86vh 0 -.05rem#fff,53.7vw 38.8vh 0 -.22rem#fff,74.2vw 60.8vh 0 -.03rem#fff,86.7vw 2.9vh 0 -.5rem#fff,74.2vw 68.7vh 0 -.41rem#fff,66vw 11.4vh 0 -.46rem#fff,68.9vw 48vh 0 -.42rem#fff,28.9vw 51.8vh 0 -.06rem#fff,4.1vw 27.6vh 0 -.16rem#fff,14.5vw 50.4vh 0 -.2rem#fff,11.6vw 68vh 0 -.24rem#fff,10.2vw 37.9vh 0 -.15rem#fff,58.9vw 60.6vh 0 -.2rem#fff,5.2vw 73.8vh 0 -.32rem#fff,4.1vw 11.9vh 0 -.32rem#fff,96.5vw 2.3vh 0 -.18rem#fff,65vw 63.1vh 0 -.5rem#fff,86.2vw 35.7vh 0 -.48rem#fff,63vw 32.1vh 0 -.35rem#fff,61.1vw 38.6vh 0 -.08rem#fff,16.9vw 78.7vh 0 -.25rem#fff,9.3vw 49.1vh 0 -.07rem#fff,27.5vw 90.7vh 0 -.3rem#fff,13.1vw 88.8vh 0 -.07rem#fff,12.8vw 26.1vh 0 -.25rem#fff,19.3vw 91.2vh 0 -.32rem#fff,10.2vw 67.4vh 0 -.49rem#fff,52.6vw 54.4vh 0 -.13rem#fff,72.3vw 65.7vh 0 -.06rem#fff,19.6vw 12.2vh 0 -.32rem#fff,30.2vw 51.8vh 0 -.21rem#fff,85.8vw 84.3vh 0 -.03rem#fff,10.3vw 68.6vh 0 -.39rem#fff,76.7vw 85.9vh 0 -.05rem#fff,71.8vw 37.7vh 0 -.06rem#fff,50.1vw 74.6vh 0 -.33rem#fff,41.9vw 70.5vh 0 -.27rem#fff,48vw 98.2vh 0 -.02rem#fff,8.5vw 92.3vh 0 -.28rem#fff,40.6vw 8.1vh 0 -.43rem#fff,57.1vw 57.7vh 0 -.07rem#fff,36.1vw 32.9vh 0 -.37rem#fff,50.1vw 42.6vh 0 -.01rem#fff,20.5vw 13.9vh 0 -.05rem#fff,90.3vw 2.1vh 0 -.1rem#fff,54.3vw 55.8vh 0 -.42rem#fff,35.6vw 24.6vh 0 -.36rem#fff,54.4vw 65.2vh 0 -.27rem#fff,91.2vw 23.1vh 0 -.06rem#fff,36.9vw 19.2vh 0 -.45rem#fff,13.4vw 15.1vh 0 -.43rem#fff,25.1vw 30.5vh 0 -.01rem#fff,55.8vw 31.1vh 0 -.01rem#fff,53.3vw 73vh 0 -.26rem#fff,88.7vw 95.7vh 0 -.41rem#fff,12.9vw 68.8vh 0 -.18rem#fff,66.8vw 65.5vh 0 -.31rem#fff,31.1vw 11.3vh 0 -.1rem#fff,54.9vw 3.9vh 0 -.17rem#fff,30.2vw 55.2vh 0 -.1rem#fff,39.7vw .4vh 0 -.45rem#fff,49.6vw 99.1vh 0 -.12rem#fff,67.9vw 11.3vh 0 -.28rem#fff,24.7vw 49.9vh 0 -.35rem#fff,16.4vw 87.4vh 0 -.15rem#fff,44.6vw 40vh 0 -.28rem#fff,9.1vw 36vh 0 -.19rem#fff,69.6vw 50.4vh 0 -.25rem#fff,77.6vw 53.8vh 0 -.44rem#fff,81.5vw 49.8vh 0 -.44rem#fff,56.8vw 99.3vh 0 -.41rem#fff,87.6vw 97.4vh 0 -.01rem#fff,17.6vw 37.6vh 0 -.22rem#fff,70.5vw 72.5vh 0 -.19rem#fff,64.6vw 77.4vh 0 -.25rem#fff,3.4vw 70.3vh 0 -.25rem#fff,25.3vw 78.1vh 0 -.07rem#fff,74.4vw .6vh 0 -.18rem#fff,97.8vw 12.4vh 0 -.48rem#fff,21.8vw 70.8vh 0 -.02rem#fff,65vw 50.7vh 0 -.24rem#fff,15.7vw 51.4vh 0 -.33rem#fff,6.7vw 9.7vh 0 -.24rem#fff,72.9vw 89.4vh 0 -.47rem#fff,41.2vw 31.9vh 0 -.34rem#fff,74.5vw 35.3vh 0 -.38rem#fff,51.2vw 48.4vh 0 -.24rem#fff,33.4vw 73.9vh 0 -.16rem#fff;-webkit-animation-duration:6s;animation-duration:6s}[_nghost-%COMP%]   .layer1.a[_ngcontent-%COMP%]{-webkit-animation-delay:-3s;animation-delay:-3s}@-webkit-keyframes fall{100%{-webkit-transform:translateY(100vh);transform:translateY(100vh)}}@keyframes fall{100%{-webkit-transform:translateY(100vh);transform:translateY(100vh)}}"]],data:{}});function d(f){return r.Kb(0,[(f()(),r.tb(0,0,null,null,5,"ion-content",[],null,null,null,m.d,m.b)),r.sb(1,49152,null,0,t.s,[r.h,r.k,r.z],null,null),(f()(),r.tb(2,0,null,0,1,"app-bingo-board",[],null,null,null,s,a)),r.sb(3,4308992,null,0,u,[t.a],null,null),(f()(),r.tb(4,0,null,0,0,"div",[["class","snow layer1 a"]],null,null,null,null,null)),(f()(),r.tb(5,0,null,0,0,"div",[["class","snow layer1"]],null,null,null,null,null))],(function(f,v){f(v,3,0)}),null)}function g(f){return r.Kb(0,[(f()(),r.tb(0,0,null,null,1,"app-home",[],null,null,null,d,p)),r.sb(1,49152,null,0,b,[],null,null)],null,null)}var C=r.pb("app-home",b,g,{},{},[]),_=e("gIcY"),O=function(){return function(){}}(),M=e("ZYCi");e.d(v,"HomePageModuleNgFactory",(function(){return y}));var y=r.qb(n,[],(function(f){return r.Bb([r.Cb(512,r.j,r.bb,[[8,[h.a,C]],[3,r.j],r.x]),r.Cb(4608,w.k,w.j,[r.u,[2,w.s]]),r.Cb(4608,_.c,_.c,[]),r.Cb(4608,t.b,t.b,[r.z,r.g]),r.Cb(4608,t.Eb,t.Eb,[t.b,r.j,r.q]),r.Cb(4608,t.Hb,t.Hb,[t.b,r.j,r.q]),r.Cb(1073742336,w.b,w.b,[]),r.Cb(1073742336,_.b,_.b,[]),r.Cb(1073742336,_.a,_.a,[]),r.Cb(1073742336,t.Cb,t.Cb,[]),r.Cb(1073742336,O,O,[]),r.Cb(1073742336,M.n,M.n,[[2,M.s],[2,M.m]]),r.Cb(1073742336,n,n,[]),r.Cb(1024,M.k,(function(){return[[{path:"",component:b}]]}),[])])}))},gIcY:function(f,v,e){"use strict";e("mrSG");var r=e("CcnG");e("ZYjt"),e("6blF"),e("isby"),e("67Y/"),e("McSo"),e("0/uQ"),e.d(v,"b",(function(){return m})),e.d(v,"c",(function(){return n})),e.d(v,"a",(function(){return t}));var n=function(){function f(){this._accessors=[]}return f.prototype.add=function(f,v){this._accessors.push([f,v])},f.prototype.remove=function(f){for(var v=this._accessors.length-1;v>=0;--v)if(this._accessors[v][1]===f)return void this._accessors.splice(v,1)},f.prototype.select=function(f){var v=this;this._accessors.forEach((function(e){v._isSameGroup(e,f)&&e[1]!==f&&e[1].fireUncheck(f.value)}))},f.prototype._isSameGroup=function(f,v){return!!f[0].control&&f[0]._parent===v._control._parent&&f[1].name===v.name},f}(),h=new r.p("NgFormSelectorWarning"),m=function(){return function(){}}(),t=function(){function f(){}var v;return v=f,f.withConfig=function(f){return{ngModule:v,providers:[{provide:h,useValue:f.warnOnDeprecatedNgFormSelector}]}},f}()}}]);