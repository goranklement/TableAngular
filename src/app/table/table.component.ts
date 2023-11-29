import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  posts: Post[] = [];

  constructor(private router: Router) {
    this.getPosts(); // Call your method after initializing Router
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  async getPosts() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      this.posts = response.data;
      console.log(this.posts);
    } catch (error) {
      console.error(error);
    }
  }
}
