import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button'; // Add this
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, ToggleButtonModule,DropdownModule,ButtonModule,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isSidenavOpen: boolean = false; // Controls sidenav visibility
  isNotificationsVisible: boolean = false; // Controls notifications visibility
  isNotificationsEnabled: boolean = true; // Default for Notifications
  currentTab: string = 'about'; // Highlights "Settings" by default

  constructor(private router: Router) {} // Inject Router

  // Toggle sidenav visibility
  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  // Toggle notifications visibility
  toggleNotifications(): void {
    this.isNotificationsVisible = !this.isNotificationsVisible;
  }

  // Logout logic
  logout(): void {
    console.log('User logged out');
    this.router.navigate(['/landing']); // Redirect to landing page
  }

  // Set active tab logic
  setActiveTab(tab: string): void {
    this.currentTab = tab;
    if (tab === 'forms') {
      this.router.navigate(['/forms']);
    } else if (tab === 'about') {
      this.router.navigate(['/about']);
    } else if (tab === 'dashboard') {
      this.router.navigate(['/dashboard']);
    } else if (tab === 'settings') {
      this.router.navigate(['/settings']);
    }
  }
  navitageToContactSupport(): void {
    console.log('Navigating to Contact Support Page');
    this.router.navigate(['/contact-support']); 
  }
  goToEditProfile(): void {
    this.router.navigate(['/edit-profile']);
  }
}
