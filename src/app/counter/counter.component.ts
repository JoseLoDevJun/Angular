import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
<h3>{{counter}}</h3>
<button (click)="increaseBy(1)" >+1</button>
<button (click)="lessBy(1)">-1</button>
<button (click)="resetCounter()">Reset</button>`,
standalone: true,
imports: []
})

export class CounterComponent {
  constructor() { }

  public counter: number = 2023;

 increaseBy(value:number):void{
   this.counter+=value;
 }

 lessBy(value: number):void{
   this.counter -=value ;
 }

 resetCounter():void{
   this.counter = 2023;
 }


}
