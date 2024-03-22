import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';
  private accessToken = 'YOUR_PERSONAL_ACCESS_TOKEN';
  constructor(private http: HttpClient) { }

  getUserData(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}`);
  }

  getUserRepositories(username: string, page: number, perPage: number): Observable<any[]> {
    const url = `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`;
    return this.http.get<any[]>(url);
  }
}
