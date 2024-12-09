import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FormsModule, CommonModule],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  isSidenavOpen: boolean = false;
  isEditMode: boolean = false;
  currentTab: string = '';
  isSaved: boolean = false;
  firstName: string = 'John';
  lastName: string = 'Doe';
  email: string = 'john.doe@example.com';
  username: string = 'Lol';

  constructor(private router: Router) {}

  // Toggles side navigation
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

// Toggle edit mode
toggleEditMode() {
  this.isEditMode = !this.isEditMode;
}

// Save profile changes
saveProfile() {
  console.log('Profile saved:', {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    username: this.username,
  });

  this.isEditMode = false; // Exit edit mode

  // Show the "Saved!" pop-up
  this.isSaved = true;

  // Hide the pop-up after 2 seconds
  setTimeout(() => {
    this.isSaved = false;
  }, 2000);
}


  // Reset form values
  resetForm() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.email = 'john.doe@example.com';
    this.username = 'Lol';
    this.isEditMode = false; // Exit edit mode
  }

  // Navigate between tabs
  setActiveTab(tab: string) {
    this.currentTab = tab;
    this.router.navigate([`/${tab}`]);
  }

  // Logout user
  logout() {
    console.log('User logged out');
    this.router.navigate(['/landing']);
  }

  // Navigate to edit profile
  goToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }
  profilePicture: string = 'assets/kelly.jpg'; // Default profile picture

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.profilePicture = e.target.result; // Update profile picture with the selected image
      };
  
      reader.readAsDataURL(input.files[0]); // Convert the file to a data URL
    }
}

}
