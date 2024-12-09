import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-support',
  standalone: true,
  imports: [],
  templateUrl: './contact-support.component.html',
  styleUrl: './contact-support.component.scss'
})
export class ContactSupportComponent {
  constructor(private router: Router) {}
  closeSupport(): void {
    this.router.navigate(['/about']); // Redirect back to About page
  }
}
