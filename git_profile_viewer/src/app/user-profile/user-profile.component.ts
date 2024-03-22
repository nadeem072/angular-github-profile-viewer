import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  username: string = '';
  userData: any;
  repositories: any[] = [];
  pageSize: number = 10;
  currentPage: number = 1;
  error: string | null = null;
  totalRepositories: number = 0;

  constructor(private route: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.fetchUserData();
    });
  }

  fetchUserData() {
    this.githubService.getUserData(this.username).subscribe(
      (data: any) => {
      this.userData = data;
      if (this.userData.public_repos > 0) {
        this.fetchRepositories();
      }
    },
    (error: HttpErrorResponse) => {
      this.error = 'User not found. Please enter a valid GitHub username.';
    }
    );
  }

  fetchRepositories() {
    this.githubService.getUserRepositories(this.username, this.currentPage, this.pageSize).subscribe(
      (data: any[]) => {
        this.repositories = data;
        this.totalRepositories = data.length; // Update totalRepositories count
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching user repositories:', error);
      }
    );
  }

  pageChanged(event: any) {
    this.currentPage = event.pageIndex ;
    this.fetchRepositories();
  }
}