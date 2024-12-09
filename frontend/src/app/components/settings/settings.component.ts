import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button'; // Add this
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, ToggleButtonModule,DropdownModule,ButtonModule,CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  isSidenavOpen: boolean = false; // Controls sidenav visibility
  isNotificationsVisible: boolean = false; // Controls notifications visibility
  isLightMode: boolean = true; // Default for Light Mode
  isNotificationsEnabled: boolean = true; // Default for Notifications
  currentTab: string = 'settings'; // Highlights "Settings" by default

  themes = [
    { label: 'Default', value: 'default' },
    { label: 'Dark', value: 'dark' },
    { label: 'Light', value: 'light' },
  ];
  selectedTheme: { label: string; value: string } | null = null;
  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectTheme(theme: { label: string; value: string }): void {
    this.selectedTheme = theme;
    this.isDropdownOpen = false; // Close the dropdown after selecting
    console.log('Selected Theme:', this.selectedTheme);
  }
  

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
  
  isConfirmationModalOpen = false;
  isPasswordModalOpen = false;
  password: string = '';

  openConfirmationModal(): void {
    this.isConfirmationModalOpen = true;
  }

  confirmDeletion(): void {
    this.isConfirmationModalOpen = false;
    this.isPasswordModalOpen = true;
  }

  closeModal(): void {
    this.isConfirmationModalOpen = false;
    this.isPasswordModalOpen = false;
  }

  // Finalize the deletion process
  finalizeDeletion(): void {
    if (this.password === '1234') { // Replace with actual validation logic
      console.log('Account deleted successfully');
      this.closeModal();
      this.router.navigate(['']); // Redirect to the Dashboard
    } else {
      alert('Invalid password. Please try again.')
    }
}
goToEditProfile(): void {
  this.router.navigate(['/edit-profile']);
}
}
