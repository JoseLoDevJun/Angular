import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroComponent, ListComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public  title : string = 'Mi Primera App de Angualr';

}
