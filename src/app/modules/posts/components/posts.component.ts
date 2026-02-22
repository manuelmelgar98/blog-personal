import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PostApiService } from '../services/post.api.service';
import { forkJoin } from 'rxjs';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostsComponent implements OnInit {
  @ViewChild('postList', { static: true }) postListRef!: ElementRef;
  private api = inject(PostApiService);

  ngOnInit() {
    forkJoin({
      posts: this.api.getAllPosts(),
      categories: this.api.getAllCategories(),
      tags: this.api.getAllTags(),
    }).subscribe(({ posts, categories, tags }) => {
      const catMap = new Map(categories.map((c) => [c.id, c.name]));
      const tagMap = new Map(tags.map((t) => [t.id, t.name]));

      const wcPosts = posts.map((p) => ({
        ...p,
        categories: p.categories.map((id) => catMap.get(Number(id)) ?? String(id)),
        tags: p.tags.map((id) => tagMap.get(Number(id)) ?? String(id)),
        date:
          new Date(p.date).toString() === 'Invalid Date'
            ? new Date().toISOString()
            : new Date(p.date).toISOString(),
      }));

      (this.postListRef.nativeElement as any).posts = wcPosts;
    });
  }
}
