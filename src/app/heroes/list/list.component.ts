import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  HeroNames : string[]= ['Spider', 'Iron Man', 'Green Light', 'etc'];


  removeLastHero():void{
    this.HeroNames.pop();
  }
}
