import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
public name : string = 'Jose';
public age : number =23;

getHeroDescription(): string{
  return `${this.name} - ${this.age}`;
}

get capitalizeName():string{
  return this.name.toUpperCase();
}


changeHero(): void{
 this.name = 'Srodinguer'
}

changeAge():void{
  this.age = 24;

}

resetForm():void{
  this.age = 23;

  document.querySelectorAll('h1')!.forEach(element => {
    element.innerHTML= '<h1>Desde Angular</h1>'
  });
}


}
