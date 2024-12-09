import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'], // Corrected property name
})
export class FormsComponent {
  isSidenavOpen: boolean = false; // Controls sidenav visibility
  isNotificationsVisible: boolean = false; // Controls notifications visibility
  currentTab: string = 'forms'; // Highlights "Forms" by default

  constructor(private router: Router) {} // Inject Router

  // Toggle sidenav visibility
  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  // Toggle notifications visibility
  toggleNotifications(): void {
    this.isNotificationsVisible = !this.isNotificationsVisible;
  }

  // Logout functionality
  logout(): void {
    console.log('User logged out');
    this.router.navigate(['/landing']); // Redirect to landing page
  }

  // Set the active tab and navigate
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

  // Track which menu is active
  activeMenuIndex: number | null = null;

  // Toggle the menu visibility
  toggleMenu(index: number): void {
    this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
  }

  // Array to store forms
  forms: { id: number; title: string; lastUpdated: string }[] = [
    { id: 1, title: 'Form Title 1', lastUpdated: '06/20/24' },
    { id: 2, title: 'Form Title 2', lastUpdated: '07/15/24' },
  ];

  // Edit a form
  editForm(index: number): void {
    const formId = this.forms[index].id;
    this.router.navigate([`/edit-form`, formId]); // Navigate to the edit form route
  }

  // Add a new form
  addNewForm(): void {
    const newForm = {
      id: this.forms.length + 1, // Auto-increment ID
      title: `Form Title ${this.forms.length + 1}`,
      lastUpdated: new Date().toLocaleDateString(),
    };
    this.forms.unshift(newForm); // Add new form at the top of the list
  }

  // Handle delete form
  deleteForm(index: number): void {
    console.log(`Deleting form at index ${index}`);
    this.forms.splice(index, 1);
  }
}
