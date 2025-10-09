import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { PostApiService } from '../services/post.api.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  standalone: true,
  imports:[],
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostsComponent implements OnInit {
  private api = inject(PostApiService);

  ngOnInit() {
      this.api.getAllPosts().subscribe(posts => {
        document.dispatchEvent(
          new CustomEvent('posts-changed', {
            detail: { action: 'load', posts }
          })
        );
      });
  }
}
