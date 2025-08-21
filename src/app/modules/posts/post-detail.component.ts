import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-post-detail',
  template: `
    <section class="p-4">
      <h2 class="text-xl font-semibold">Detalle de Post</h2>
      <p>ID: {{ id }}</p>
    </section>
  `,
})
export class PostDetailComponent {
  id = this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute) {}
}
