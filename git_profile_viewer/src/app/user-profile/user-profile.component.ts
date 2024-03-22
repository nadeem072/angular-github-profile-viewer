import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github.service';

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

  constructor(private route: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.fetchUserData();
    });
  }

  fetchUserData() {
    this.githubService.getUserData(this.username).subscribe((data: any) => {
      this.userData = data;
      if (this.userData.public_repos > 0) {
        this.fetchRepositories();
      }
    });
  }

  fetchRepositories() {
    this.githubService.getUserRepositories(this.username, this.currentPage, this.pageSize).subscribe((repos: any[]) => {
      this.repositories = repos;
    });
  }

  pageChanged(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.fetchRepositories();
  }
}