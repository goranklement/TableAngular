import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.isValidEmail(this.email) && this.password.length >= 6) {
      // Logic for successful login
      this.router.navigate(['table']); // Redirect to main page
    } else {
      alert(
        'Please enter a valid email and a password with at least 6 characters.'
      );
    }
  }

  isValidEmail(email: string): boolean {
    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  isValidForm(): boolean {
    return this.isValidEmail(this.email) && this.password.length >= 6;
  }
}
