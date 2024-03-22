
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string = '';

  constructor(private router: Router) { }

  viewProfile() {
    if (this.username.trim() !== '') {
      this.router.navigate(['/profile', this.username]);
    }
  }
  searchUser() {
    if (this.username.trim() !== '') {
      this.router.navigate(['/user-profile', this.username]);
    }
  }

}