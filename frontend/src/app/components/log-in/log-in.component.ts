import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  imports: [FormsModule, InputTextModule, ButtonModule, RouterLink],
})
export class LogInComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Redirect to the dashboard
    this.router.navigate(['/dashboard']);
  }
}
