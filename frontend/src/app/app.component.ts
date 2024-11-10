import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';  // Import PrimeNG CardModule
import { LandingPageComponent } from './components/landing-page/landing-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardModule, LandingPageComponent],  // Include LandingPageComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
}
