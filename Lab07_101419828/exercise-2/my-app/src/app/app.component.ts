import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, // Add RouterOutlet for routing support
    HeroesComponent, // Import HeroesComponent for usage in the template
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}