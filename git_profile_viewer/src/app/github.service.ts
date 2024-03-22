import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = 'https://api.github.com';
  private accessToken = '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';
  constructor(private http: HttpClient) { }

  getUserData(username: string): Observable<any> {
    const url = `${this.apiUrl}/users/${username}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.http.get(url, { headers });
  }

  getUserRepositories(username: string, page: number, perPage: number): Observable<any[]> {
    const url = `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`;
    return this.http.get<any[]>(url);
  }
}
