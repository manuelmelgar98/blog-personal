import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { PostApiService } from '../services/post.api.service';

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
      const prueba = {
        id: "4",
        title: "Prueba 4",
        content: "Esta es la cuarta prueba",
        date: "07/10/2025",
        categories: [1,2],
        tags: [1,2]
      }

      // this.api.getAll().subscribe({
      //   next: (posts) => console.log('API posts', posts),
      //   error: (err) => console.error('Error API:', err)
      // });

      // this.api.getById("3").subscribe({
      //   next: (post) => console.log('API post:', post),
      //   error: (err) => console.error('Error API:', err)
      // })
    
      // this.api.addPost(prueba).subscribe({
      //   next: (post) => console.log(post),
      //   error: (err) => console.error(err)
      // })

      // this.api.updatePost('4', prueba).subscribe({
      //   next: (post) => console.log(post),
      //   error: (err) => console.error(err)        
      // })

      // this.api.deletePost("4").subscribe({
      //   next: (post) => console.log(post),
      //   error: (err) => console.error(err)        
      // })
  }
}
