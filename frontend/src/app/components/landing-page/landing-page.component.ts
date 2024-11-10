import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,  // This makes the component standalone
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  title = 'RateSmart';
}
