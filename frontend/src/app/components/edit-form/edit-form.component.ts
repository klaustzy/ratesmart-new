import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss'
})
export class EditFormComponent {
  isSidenavOpen: boolean = false; // Controls sidenav visibility
  isNotificationsVisible: boolean = false; // Controls notifications visibility
  currentTab: string = 'forms'; // Highlights "Dashboard" by default
  
  constructor(private router: Router) {} // Inject Router
  // Toggle sidenav visibility
  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  // Toggle notifications visibility
  toggleNotifications(): void {
    this.isNotificationsVisible = !this.isNotificationsVisible;
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
  sectionTitle: string = 'Section Title';
  formDescription: string = 'Form Description';
  questionTitle: string = 'Untitled Question';
  isDropdownVisible = false;

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  editForm(): void {
    console.log('Navigating to Customize page');
    this.router.navigate(['/customize']); // Replace '/customize' with the correct route for your Customize page
  }
  goBack(): void {
    this.router.navigate(['forms']); // Replace with the correct route for your "Edit Form" page
  }

  navigateToShare(): void {
    console.log('Navigating to Share page');
    this.router.navigate(['/share']); // Update the route as per your application's routing setup
  }
  navigateToAnalytics(): void {
    console.log('Navigating to Analytics');
    this.router.navigate(['/analytics']); // Replace with your analyutics page route
  }
  goToEditProfile(): void {
    this.router.navigate(['/edit-profile']);
  }
}
