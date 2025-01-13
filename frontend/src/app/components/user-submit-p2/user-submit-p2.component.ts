import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-submit-p2',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './user-submit-p2.component.html',
  styleUrl: './user-submit-p2.component.scss',
})
export class UserSubmitP2Component {
  stars = Array(5).fill(null); // Array for 5 stars
  selectedStars = 0; // Default to 0 selected stars
  feedback = '';
  improvementOptions = [
    { label: 'Link', selected: false },
    { label: 'Button', selected: false },
    { label: 'Reset', selected: false },
    { label: 'Radio', selected: false },
    { label: 'Checkbox', selected: false },
    { label: 'Input', selected: false },
    { label: 'Submit', selected: false },
  ];

  // Function to handle star clicks
  onStarClick(starIndex: number) {
    this.selectedStars = starIndex + 1; // Set the number of selected stars
  }

  // Toggle improvement options
  toggleOption(option: any) {
    option.selected = !option.selected;
  }
}
