import { Component, Input } from '@angular/core';
import { ListPostComponent } from '../list-post/list-post.component';
import { Post } from '../post.model';


@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent {
  allPosts: Post[] = [
    new Post('Material Lite Snippets for Sublime', 'here is some cool stuff', 'Darth Vader'),
    new Post('Star Wars is the best', 'Truth', 'Yoda'),
    new Post('Skywalker Rules', 'Vader Drools', 'Chewbacca')
  ];
}
