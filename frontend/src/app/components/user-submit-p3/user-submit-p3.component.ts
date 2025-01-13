import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-submit-p3',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './user-submit-p3.component.html',
  styleUrl: './user-submit-p3.component.scss'
})
export class UserSubmitP3Component {
  emojis = ['😈', '😒', '😑', '🙂', '😇'];
  selectedEmoji: number | null = null;
  feedback: string = '';

  selectEmoji(index: number): void {
    this.selectedEmoji = index;
  }
}
