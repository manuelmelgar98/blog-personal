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

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }
  
}
