import { Component, OnInit, Input } from '@angular/core';
import { ListPostComponent } from '../list-post/list-post.component';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';


@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css'],
  providers: [PostService]
})
export class NewestComponent implements OnInit{
  posts: Post[];

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit(){
    this.posts = this.postService.getPosts();
  }


}
