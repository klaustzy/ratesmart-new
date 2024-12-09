import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isSidenavOpen: boolean = false; // Controls sidenav visibility
  isNotificationsVisible: boolean = false; // Controls notifications visibility
  currentTab: string = 'dashboard'; // Highlights "Dashboard" by default
  currentForm: number = 1; // Default to Form 1
  
  constructor(private router: Router) {} // Inject Router
  // Toggle sidenav visibility
  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  // Toggle notifications visibility
  toggleNotifications(): void {
    this.isNotificationsVisible = !this.isNotificationsVisible;
  }

  // Set the current form
  setCurrentForm(formNumber: number): void {
    this.currentForm = formNumber; // Update the current form
  }

  logout(): void {
    console.log('User logged out');
    this.router.navigate(['/landing']); // Redirect to landing page
  }

  setActiveTab(tab: string): void {
    this.currentTab = tab;
    if (tab === 'forms') {
      this.router.navigate(['/forms']);
    }
    else if (tab === 'about') {
      this.router.navigate(['/about']);
    }
    else if (tab === 'dashboard') {
      this.router.navigate(['/dashboard']);
    }
    else if (tab === 'settings') {
      this.router.navigate(['/settings']);
    }
  }
  goToEditProfile(): void {
    this.router.navigate(['/edit-profile']);
  }
}
