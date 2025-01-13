import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router'; // Import RouterLink for navigation

@Component({
  selector: 'app-user-start-page',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './user-start-page.component.html',
  styleUrl: './user-start-page.component.scss'
})
export class UserStartPageComponent {

}
