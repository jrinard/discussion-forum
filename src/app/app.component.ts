import { Component } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

allPosts: Post[] = [
  new Post('Material Lite Snippets for Sublime', 'here is some cool stuff', 'Darth Vader'),
  new Post('Star Wars is the best', 'Truth', 'Yoda'),
  new Post('Skywalker Rules', 'Vader Drools', 'Chewbacca')
];



}
