import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-submit-p1',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, CalendarModule, ButtonModule,RouterLink],
  templateUrl: './user-submit-p1.component.html',
  styleUrl: './user-submit-p1.component.scss'
})
export class UserSubmitP1Component {
  
  userAge: string = ''; // Binding for Age input
  selectedDate: string = ''; // Binding for Date input

  validateAge(): void {
    // Remove non-numeric characters
    this.userAge = this.userAge.replace(/[^0-9]/g, '');

    // Disallow 0 as the only input
    if (this.userAge === '0') {
      this.userAge = '';
    }
  }
}
