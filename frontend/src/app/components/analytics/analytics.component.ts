import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
  isSidenavOpen: boolean = false; // Controls sidenav visibility
  isNotificationsVisible: boolean = false; // Controls notifications visibility
  isDropdownVisible: boolean = false; // Controls pencil dropdown visibility
  currentTab: string = 'forms'; // Highlights "Forms" by default

  constructor(private router: Router) {}

  // Toggle sidenav visibility
  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  // Toggle notifications visibility
  toggleNotifications(): void {
    this.isNotificationsVisible = !this.isNotificationsVisible;
  }

  // Toggle dropdown visibility
  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  // Logout user
  logout(): void {
    console.log('User logged out');
    this.router.navigate(['/landing']); // Redirect to landing page
  }

  // Set active tab and navigate
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
  printAnalytics(): void {
    window.print(); // This triggers the browser's print functionality
  }
  

  // Navigate back to the previous page
  goBack(): void {
    this.router.navigate(['edit-form/:id']); // Replace with the correct route for your "Edit Form" page
  }

  // Navigate to the edit form page
  editForm(): void {
    console.log('Navigating to Customize page');
    this.router.navigate(['/customize']); // Replace '/customize' with the correct route for your Customize page
  }

  // Navigate to share page (if needed from another context)
  navigateToShare(): void {
    console.log('Navigating to Share Page');
    this.router.navigate(['/share']); // Replace with your share page route
  }
  navigateToAnalytics(): void {
    console.log('Navigating to Analytics');
    this.router.navigate(['/analytics']); // Replace with your analyutics page route
  }
  goToEditProfile(): void {
    this.router.navigate(['/edit-profile']);
  }
}
