import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostApiService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiBaseUrl}/posts`;

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  getAllCategories(): Observable<{id:number; name:string}[]> {
  return this.http.get<{id:number; name:string}[]>(`${environment.apiBaseUrl}/categories`);
  }

  getAllTags(): Observable<{id:number; name:string}[]> {
    return this.http.get<{id:number; name:string}[]>(`${environment.apiBaseUrl}/tags`);
  }

  getByIdPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }
  
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}`, post);
  }

  updatePost(id: string, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/${id}`, post);
  }

  deletePost(id: string): Observable<Post> {
    return this.http.delete<Post>(`${this.baseUrl}/${id}`);
  }
}
